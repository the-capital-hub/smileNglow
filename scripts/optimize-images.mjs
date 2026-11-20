#!/usr/bin/env node
/**
 * Bulk image optimizer for React / Vite projects.
 * Converts JPG/JPEG/PNG images to WebP while preserving originals.
 * WebP files are written next to their source images.
 *
 * Usage:
 *   npm install --save-dev sharp
 *   node scripts/optimize-images.mjs
 *   node scripts/optimize-images.mjs --quality=85 --max-width=1920 --max-height=1920
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = process.cwd();
const QUALITY = readNumberArg('--quality', 82);
const MAX_WIDTH = readNumberArg('--max-width', 1920);
const MAX_HEIGHT = readNumberArg('--max-height', 1920);
const EFFORT = readNumberArg('--effort', 5);
const DRY_RUN = process.argv.includes('--dry-run');
const OVERWRITE = process.argv.includes('--overwrite');

const SCAN_DIRS = ['src', 'public'];
const EXTENSIONS = new Set(['.jpg', '.jpeg', '.png']);
const SKIP_DIRS = new Set(['node_modules', 'dist', 'build', '.git', '.vercel', '.next']);

function readNumberArg(prefix, fallback) {
  const value = process.argv.find((arg) => arg.startsWith(`${prefix}=`));
  if (!value) return fallback;
  const parsed = Number(value.slice(prefix.length + 1));
  return Number.isFinite(parsed) ? parsed : fallback;
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

async function collectImages(directory, results = []) {
  let entries;
  try {
    entries = await fs.readdir(directory, { withFileTypes: true });
  } catch (error) {
    if (error.code === 'ENOENT') return results;
    throw error;
  }

  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (!SKIP_DIRS.has(entry.name)) {
        await collectImages(path.join(directory, entry.name), results);
      }
      continue;
    }

    if (!entry.isFile()) continue;
    const extension = path.extname(entry.name).toLowerCase();
    if (EXTENSIONS.has(extension)) results.push(path.join(directory, entry.name));
  }

  return results;
}

async function optimizeImage(filePath) {
  const parsed = path.parse(filePath);
  const outputPath = path.join(parsed.dir, `${parsed.name}.webp`);
  const relativePath = path.relative(ROOT, filePath);

  const sourceStat = await fs.stat(filePath);
  if (!OVERWRITE) {
    try {
      const outputStat = await fs.stat(outputPath);
      if (outputStat.mtimeMs >= sourceStat.mtimeMs) {
        return { status: 'skipped', file: relativePath, reason: 'WebP already exists and is up to date' };
      }
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
    }
  }

  if (DRY_RUN) {
    return { status: 'dry-run', file: relativePath, output: path.relative(ROOT, outputPath) };
  }

  const tempPath = `${outputPath}.tmp`;
  try {
    await sharp(filePath, { animated: false })
      .rotate()
      .resize({
        width: MAX_WIDTH,
        height: MAX_HEIGHT,
        fit: 'inside',
        withoutEnlargement: true,
      })
      .webp({ quality: QUALITY, effort: EFFORT, smartSubsample: true })
      .toFile(tempPath);

    const outputStat = await fs.stat(tempPath);
    if (outputStat.size >= sourceStat.size) {
      await fs.rm(tempPath, { force: true });
      return {
        status: 'skipped',
        file: relativePath,
        reason: `WebP would be larger (${formatBytes(outputStat.size)} vs ${formatBytes(sourceStat.size)})`,
      };
    }

    await fs.rename(tempPath, outputPath);
    return {
      status: 'optimized',
      file: relativePath,
      output: path.relative(ROOT, outputPath),
      before: sourceStat.size,
      after: outputStat.size,
      saved: sourceStat.size - outputStat.size,
    };
  } catch (error) {
    await fs.rm(tempPath, { force: true }).catch(() => {});
    return { status: 'error', file: relativePath, reason: error.message };
  }
}

async function main() {
  if (QUALITY < 1 || QUALITY > 100) {
    throw new Error('--quality must be between 1 and 100');
  }
  if (MAX_WIDTH < 1 || MAX_HEIGHT < 1) {
    throw new Error('--max-width and --max-height must be positive numbers');
  }

  console.log('\n🖼️  React / Vite Bulk Image Optimizer');
  console.log(`Project: ${ROOT}`);
  console.log(`Settings: WebP quality ${QUALITY}, max ${MAX_WIDTH}×${MAX_HEIGHT}`);
  if (DRY_RUN) console.log('DRY RUN: no files will be created.');
  console.log('Original images will be preserved.\n');

  const allImages = [];
  for (const folder of SCAN_DIRS) {
    await collectImages(path.join(ROOT, folder), allImages);
  }

  if (allImages.length === 0) {
    console.log('No JPG, JPEG, or PNG images found in src or public.');
    return;
  }

  let optimizedCount = 0;
  let skippedCount = 0;
  let errorCount = 0;
  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of allImages) {
    const result = await optimizeImage(file);
    if (result.status === 'optimized') {
      optimizedCount += 1;
      totalBefore += result.before;
      totalAfter += result.after;
      console.log(`✅ ${result.file}`);
      console.log(`   ${formatBytes(result.before)} → ${formatBytes(result.after)} (saved ${formatBytes(result.saved)})`);
    } else if (result.status === 'error') {
      errorCount += 1;
      console.error(`❌ ${result.file}: ${result.reason}`);
    } else {
      skippedCount += 1;
      console.log(`↪ ${result.file}: ${result.reason ?? result.output ?? 'skipped'}`);
    }
  }

  console.log('\n========== SUMMARY ==========');
  console.log(`Scanned: ${allImages.length}`);
  console.log(`Optimized: ${optimizedCount}`);
  console.log(`Skipped: ${skippedCount}`);
  console.log(`Errors: ${errorCount}`);
  if (optimizedCount > 0) {
    console.log(`Original total: ${formatBytes(totalBefore)}`);
    console.log(`WebP total: ${formatBytes(totalAfter)}`);
    console.log(`Space saved: ${formatBytes(totalBefore - totalAfter)} (${((1 - totalAfter / totalBefore) * 100).toFixed(1)}%)`);
  }
  console.log('\nNext: update the relevant React image imports/paths to use the generated .webp files.');
}

main().catch((error) => {
  console.error('\nImage optimization failed:', error.message);
  process.exitCode = 1;
});

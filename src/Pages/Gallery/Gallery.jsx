import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FaThLarge,
  FaTooth,
  FaCamera,
  FaUsers,
  FaSmile,
  FaCouch,
  FaCalendarAlt,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import "./Gallery.css";
import cta from "../../assets/contact/cta.png";
import image1 from "../../assets/gallery/image1.jpg";
import image2 from "../../assets/gallery/image2.png";
import image3 from "../../assets/gallery/image3.jpg";
import image4 from "../../assets/gallery/image4.png";
import image5 from "../../assets/gallery/image5.png";
import image6 from "../../assets/gallery/image6.jpg";
import image7 from "../../assets/gallery/image7.png";

const galleryItems = [
  {
    id: 1,
    category: "Clinic Interior",
    image: image7,
    alt: "Smile N Glow Vasan reception",
  },
  {
    id: 2,
    category: "Treatment Room",
    image: image2,
    alt: "Modern dental treatment room",
  },
  {
    id: 3,
    category: "Clinic Interior",
    image: image1,
    alt: "Comfortable clinic waiting area",
  },
  {
    id: 4,
    category: "Our Team",
    image: image3,
    alt: "Dentist providing patient care",
  },
  {
    id: 5,
    category: "Facilities",
    image: image4,
    alt: "Modern dental equipment",
  },
  {
    id: 6,
    category: "Patient Smiles",
    image: image5,
    alt: "Smiling patient after dental care",
  },
  {
    id: 7,
    category: "Facilities",
    image: image6,
    alt: "Digital dental scan",
  },
];

const filters = [
  { label: "All Photos", icon: <FaThLarge /> },
  { label: "Clinic Interior", icon: <FaTooth /> },
  { label: "Treatment Room", icon: <FaCamera /> },
  { label: "Our Team", icon: <FaUsers /> },
  { label: "Patient Smiles", icon: <FaSmile /> },
  { label: "Facilities", icon: <FaCouch /> },
];

const reveal = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const itemReveal = {
  hidden: {
    opacity: 0,
    y: 22,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All Photos");
  const [activeImage, setActiveImage] = useState(null);
  const shouldReduceMotion = useReducedMotion();

  const revealAnimation = shouldReduceMotion
    ? {
        hidden: { opacity: 1 },
        visible: { opacity: 1 },
      }
    : reveal;

  const itemAnimation = shouldReduceMotion
    ? {
        hidden: { opacity: 1 },
        visible: { opacity: 1 },
      }
    : itemReveal;

  const visibleItems =
    activeFilter === "All Photos"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  const showPrevious = () => {
    const currentIndex = galleryItems.findIndex(
      (item) => item.id === activeImage.id
    );
    const previousIndex =
      (currentIndex - 1 + galleryItems.length) % galleryItems.length;

    setActiveImage(galleryItems[previousIndex]);
  };

  const showNext = () => {
    const currentIndex = galleryItems.findIndex(
      (item) => item.id === activeImage.id
    );
    const nextIndex = (currentIndex + 1) % galleryItems.length;

    setActiveImage(galleryItems[nextIndex]);
  };

  return (
    <main className="galleryPage">
      <motion.section
        className="galleryHero"
        variants={revealAnimation}
        initial="hidden"
        animate="visible"
      >
        <div className="galleryHeroShade" />

        <div className="galleryHeroContent">
          <p className="galleryBreadcrumb">
            Home <span>›</span> Gallery
          </p>

          <h1>
            Our <span>Gallery</span>
          </h1>

          <p>
            A glimpse of our clinic, advanced facilities, and the smiles we
            have helped create.
          </p>
        </div>
      </motion.section>

      <section className="gallerySection">
        <motion.div
          className="galleryIntro"
          variants={revealAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <span className="galleryEyebrow">Explore Our Clinic</span>

          <h2>
            Moments at Smile <span>N Glow Vasan</span>
          </h2>

          <p>
            Take a look at our modern clinic, advanced technology, and the
            comfortable care experience we offer.
          </p>
        </motion.div>

        <motion.div
          className="galleryFilters"
          aria-label="Filter gallery photos"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: shouldReduceMotion ? 0 : 0.07,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {filters.map((filter) => (
            <motion.button
              className={
                activeFilter === filter.label
                  ? "galleryFilter active"
                  : "galleryFilter"
              }
              key={filter.label}
              type="button"
              onClick={() => setActiveFilter(filter.label)}
              aria-pressed={activeFilter === filter.label}
              variants={itemAnimation}
            >
              {filter.icon}
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="galleryGrid"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: shouldReduceMotion ? 0 : 0.09,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
        >
          {visibleItems.map((item) => (
            <motion.button
              className="galleryPhoto"
              key={item.id}
              type="button"
              onClick={() => setActiveImage(item)}
              aria-label={`View ${item.alt}`}
              variants={itemAnimation}
              layout
            >
              <img src={item.image} alt={item.alt} loading="lazy" />

              <span className="galleryPhotoOverlay">
                <FaCamera />
                View Photo
              </span>
            </motion.button>
          ))}
        </motion.div>
      </section>

      <motion.section
        className="galleryCta"
        variants={revealAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <div className="galleryCtaImage">
          <img
            src={cta}
            alt="Dental care tools in a clinic"
            loading="lazy"
          />
        </div>

        <div className="galleryCtaContent">
          <p>Your Smile Matters</p>

          <h2>
            Ready for Your <span>Next Dental Visit?</span>
          </h2>

          <p>
            Book an appointment today and experience personalised dental care
            in a comfortable environment.
          </p>

          <a href="/book-appointment" className="galleryCtaButton">
            <FaCalendarAlt />
            Book an Appointment
            <span aria-hidden="true">›</span>
          </a>
        </div>
      </motion.section>

      {activeImage && (
        <div
          className="galleryLightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery photo viewer"
          onClick={() => setActiveImage(null)}
        >
          <button
            className="galleryLightboxClose"
            type="button"
            onClick={() => setActiveImage(null)}
            aria-label="Close photo viewer"
          >
            <FaTimes />
          </button>

          <button
            className="galleryLightboxArrow previous"
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label="Previous photo"
          >
            <FaChevronLeft />
          </button>

          <img
            src={activeImage.image}
            alt={activeImage.alt}
            onClick={(event) => event.stopPropagation()}
          />

          <button
            className="galleryLightboxArrow next"
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Next photo"
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </main>
  );
}

export default Gallery;
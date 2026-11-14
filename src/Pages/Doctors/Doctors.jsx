
import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import "./Doctors.css";

import adithya from "../../assets/docotor/adithya.png";
import andesh from "../../assets/docotor/andesh.png";
import kiran from "../../assets/docotor/kiran.png";
import martin from "../../assets/docotor/martin.png";
import rajio from "../../assets/docotor/rajio.png";
import sahar from "../../assets/docotor/sahar.png";
import sanketh from "../../assets/docotor/sanketh.png";
import sarfaraz from "../../assets/docotor/sarfaraz.png";
import sushant from "../../assets/docotor/sushant.png";
import yajwin from "../../assets/docotor/yajwin.png";
import sai from "../../assets/docotor/sai.png";
import vaishak from "../../assets/docotor/vaishak.png";
/* Doctor Data */

const doctors = [
  {
    id: "kiran",
    name: "Dr. Kiran Sunny",
    role: "Chief doctor, Founder",
    qualification: "BDS, MDS • Prosthodontist",
    description:
      "Focused on thoughtful treatment planning and long term oral health.",
    image: kiran,
    branches: ["HSR", "Jayanagar", "Silk Institute"],
    category: "resident",
    branchOrder: {
      HSR: 1,
      Jayanagar: 1,
      "Silk Institute": 1,
    },
  },
  {
    id: "sarfaraz",
    name: "Dr. Sarfaraz",
    role: "Resident Doctor",
    qualification: "BDS",
    description:
      "Supporting everyday dental health through preventive and restorative care.",
    image: sarfaraz,
    branches: ["HSR"],
    category: "resident",
    branchOrder: { HSR: 2 },
  },
  {
    id: "vaishak",
    name: "Dr. Vaishak",
    role: "Resident Doctor",
    qualification: "BDS",
    description:
      "Dedicated to clear guidance and comfortable dental visits.",
    image: vaishak,
    branches: ["Jayanagar"],
    category: "resident",
    branchOrder: { Jayanagar: 2 },
  },
  
  {
    id: "raijo",
    name: "Dr. Raijo Thomas",
    role: "Resident Doctor",
    qualification: "BDS",
    description:
      "Dedicated to clear guidance and comfortable dental visits.",
    image: rajio,
    branches: ["Silk Institute"],
    category: "resident",
    branchOrder: { "Silk Institute": 2 },
  },

  {
    id: "sushant",
    name: "Dr. Sushant",
    role: "Consultant",
    qualification: "BDS, MDS • Oral Surgeon",
    description:
      "Supporting patients through oral surgery with attentive care.",
    image: sushant,
    branches: ["HSR", "Jayanagar", "Silk Institute"],
    category: "consultant",
    branchOrder: {
      HSR: 1,
      Jayanagar: 1,
      "Silk Institute": 6,
    },
  },
  {
    id: "sanket",
    name: "Dr. Sanket",
    role: "Consultant",
    qualification: "BDS, MDS • Pedodontist",
    description:
      "Helping patients work toward healthier bites and confident smiles.",
    image: sanketh,
    branches: ["HSR", "Jayanagar", "Silk Institute"],
    category: "consultant",
    branchOrder: {
      HSR: 2,
      Jayanagar: 3,
      "Silk Institute": 2,
    },
  },
  {
    id: "martin",
    name: "Dr. Martin",
    role: "Consultant",
    qualification: "BDS, MDS • Endodontist",
    description:
      "Focused on preserving natural teeth and easing dental discomfort.",
    image: martin,
    branches: ["HSR", "Jayanagar", "Silk Institute"],
    category: "consultant",
    branchOrder: {
      HSR: 3,
      Jayanagar: 2,
      "Silk Institute": 1,
    },
  },
  {
    id: "sai-kalyan",
    name: "Dr. Sai Kalyan",
    role: "Consultant",
    qualification: "",
    description:
      "Dedicated to providing attentive and patient focused dental care.",
    image: sai,
    branches: ["Jayanagar", "Silk Institute"],
    category: "consultant",
    branchOrder: { HSR: 4 },
  },
  {
    id: "sahar",
    name: "Dr. Sahar",
    role: "Consultant",
    qualification: "BDS, MDS • Periodontist",
    description:
      "Focused on gum health and the care of supporting tissues.",
    image: sahar,
    branches: ["HSR","Jayanagar" ],
    category: "consultant",
    branchOrder: {
      HSR: 5,
      Jayanagar: 5,
    },
  },
  
  {
    id: "yajwin",
    name: "Dr. Yajwin",
    role: "Consultant",
    qualification: "BDS, MDS • Orthodontist",
    description:
      "Helping patients work toward healthier bites and confident smiles.",
    image: yajwin,
    branches: ["Jayanagar"],
    category: "consultant",
    branchOrder: { Jayanagar: 6 },
  },
  {
    id: "sandesh",
    name: "Dr. Sandesh",
    role: "Consultant",
    qualification: "BDS, MDS • Orthodontist",
    description:
      "Helping patients work toward healthier bites and confident smiles.",
    image: andesh,
    branches: ["Silk Institute"],
    category: "consultant",
    branchOrder: { "Silk Institute": 4 },
  },
  {
    id: "aditya",
    name: "Dr. Aditya",
    role: "Consultant",
    qualification: "BDS, MDS • Endodontist",
    description:
      "Focused on caring treatment for tooth pain and root canal needs.",
    image: adithya,
    branches: ["Silk Institute"],
    category: "consultant",
    branchOrder: { "Silk Institute": 5 },
  },
  {
    id: "Pramod",
    name: "Pramod",
    role: "manager",
    qualification: "",
    description:
      "",
    image: "",
    branches: ["Jayanagar"],
    category: "consultant",
    branchOrder: { Jayanagar: 2 },
  },
];

/* Animations */

const reveal = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardReveal = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const branches = ["HSR", "Jayanagar", "Silk Institute"];

function Doctors() {
  const shouldReduceMotion = useReducedMotion();
  const [activeBranch, setActiveBranch] = useState("HSR");

  const revealAnimation = shouldReduceMotion
    ? {
        hidden: { opacity: 1 },
        visible: { opacity: 1 },
      }
    : reveal;

  const cardAnimation = shouldReduceMotion
    ? {
        hidden: { opacity: 1 },
        visible: { opacity: 1 },
      }
    : cardReveal;

  /* Branch Wise Doctor Filtering */

  const branchDoctors = doctors
    .filter((doctor) => doctor.branches.includes(activeBranch))
    .sort(
      (a, b) =>
        (a.branchOrder?.[activeBranch] ?? 999) -
        (b.branchOrder?.[activeBranch] ?? 999)
    );

  const residents = branchDoctors.filter(
    (doctor) => doctor.category === "resident"
  );

  const consultants = branchDoctors.filter(
    (doctor) => doctor.category === "consultant"
  );

  /* Doctor Cards */

  const renderDoctorCards = (doctorList) =>
    doctorList.map((doctor) => (
      <motion.article
        className="doctor-card"
        key={doctor.id}
        variants={cardAnimation}
      >
        <div className="doctor-image">
          {doctor.image ? (
            <img
              src={doctor.image}
              alt={doctor.name}
              loading="lazy"
            />
          ) : (
            <div className="doctor-image-placeholder">
              <span className="placeholder-mark" aria-hidden="true">
                ♡
              </span>
              <span>Smile & Glow Vasan</span>
            </div>
          )}
        </div>

        <div className="doctor-content">
          <h3>{doctor.name}</h3>

          <span className="doctor-role">{doctor.role}</span>

          {doctor.qualification && (
            <p className="doctor-qualification">
              <span className="qualification-icon" aria-hidden="true">
                ✦
              </span>
              {doctor.qualification}
            </p>
          )}

          <p className="doctor-description">
            {doctor.description}
          </p>
        </div>
      </motion.article>
    ));

  /* Doctor Category */

  const renderDoctorSection = (title, doctorList) => {
    if (!doctorList.length) return null;

    return (
      <div className="doctor-category-section">
        <h3 className="doctor-category-title">{title}</h3>

        <motion.div
          key={`${activeBranch}-${title}`}
          className="doctors-grid"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: shouldReduceMotion ? 0 : 0.1,
              },
            },
          }}
          initial={shouldReduceMotion ? false : "hidden"}
          animate="visible"
        >
          {renderDoctorCards(doctorList)}
        </motion.div>
      </div>
    );
  };

  return (
    <main className="doctors-page">
      {/* Hero Section */}

      <motion.section
        className="doctors-hero"
        variants={revealAnimation}
        initial="hidden"
        animate="visible"
      >
        <div className="doctors-hero-content">
          <p className="doctors-breadcrumb">
            <span>Home</span>
            <span className="breadcrumb-separator">›</span>
            <span>Doctors</span>
          </p>

          <h1>
            Our <span>Doctors</span>
          </h1>

          <h2>Meet the people behind your healthier smile.</h2>

          <p className="doctors-hero-description">
            From your first consultation to your follow up care, our dental
            team is here to make every visit feel comfortable, clear, and
            personal.
          </p>

          <a className="doctors-book-button" href="/contact">
            <span aria-hidden="true">▦</span>
            Book an Appointment
          </a>
        </div>
      </motion.section>

      {/* Team Section */}

      <section className="doctors-team-section">
        {/* Benefits */}

        <motion.div
          className="doctors-benefits"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: shouldReduceMotion ? 0 : 0.12,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.article
            className="doctors-benefit"
            variants={cardAnimation}
          >
            <span className="benefit-icon" aria-hidden="true">
              ♧
            </span>
            <div>
              <h3>Experienced Team</h3>
              <p>Specialists across key dental fields</p>
            </div>
          </motion.article>

          <motion.article
            className="doctors-benefit"
            variants={cardAnimation}
          >
            <span className="benefit-icon" aria-hidden="true">
              ◇
            </span>
            <div>
              <h3>Patient First Care</h3>
              <p>Comfort, safety, and clear guidance</p>
            </div>
          </motion.article>

          <motion.article
            className="doctors-benefit"
            variants={cardAnimation}
          >
            <span className="benefit-icon" aria-hidden="true">
              ♡
            </span>
            <div>
              <h3>Comprehensive Care</h3>
              <p>From prevention to advanced treatments</p>
            </div>
          </motion.article>

          <motion.article
            className="doctors-benefit"
            variants={cardAnimation}
          >
            <span className="benefit-icon" aria-hidden="true">
              ♡
            </span>
            <div>
              <h3>Trusted by Patients</h3>
              <p>For quality care and lasting smiles</p>
            </div>
          </motion.article>
        </motion.div>

        {/* Section Heading */}

        <motion.header
          className="doctors-section-header"
          variants={revealAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <span className="doctors-eyebrow">Our Team</span>

          <h2>
            Care Led by <span>Experience.</span> Guided by <span>You.</span>
          </h2>

          <p>
            Our team brings together dental professionals across different
            specialties, so you can receive thoughtful care for your unique
            needs. We take time to listen, explain your options, and help you
            feel confident at every step.
          </p>
        </motion.header>

        {/* Branch Selector */}

        <div className="doctors-branch-selector" role="tablist" aria-label="Select clinic branch">
          {branches.map((branch) => (
            <button
              key={branch}
              type="button"
              role="tab"
              className={`doctors-branch-button ${
                activeBranch === branch ? "active" : ""
              }`}
              onClick={() => setActiveBranch(branch)}
              aria-selected={activeBranch === branch}
              aria-pressed={activeBranch === branch}
            >
              {branch}
            </button>
          ))}
        </div>

        {/* Branch Heading */}

        <div className="doctors-branch-heading">
          <h2>{activeBranch} Branch</h2>
          <p>Meet our dental care team</p>
        </div>

        {/* Residents and Consultants */}

        <div key={activeBranch} className="doctors-branch-results" aria-live="polite">
          {renderDoctorSection("Resident Doctors", residents)}
          {renderDoctorSection("Consultants", consultants)}
        </div>

        {/* Appointment CTA */}

        <motion.section
          className="doctors-cta"
          variants={revealAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="doctors-cta-decoration" aria-hidden="true">
            ♡
          </div>

          <div className="doctors-cta-content">
            <span className="doctors-cta-eyebrow">
              YOUR SMILE MATTERS
            </span>

            <h2>
              Ready for a Healthier <span>Smile?</span>
            </h2>

            <p>
              Book a consultation with our expert dental team at the{" "}
              {activeBranch} branch.
            </p>
          </div>

          <div className="doctors-cta-features">
            <div className="doctors-cta-feature">
              <span aria-hidden="true">▦</span>
              <p>Easy Booking</p>
            </div>

            <div className="doctors-cta-feature">
              <span aria-hidden="true">◇</span>
              <p>Trusted Experts</p>
            </div>

            <div className="doctors-cta-feature">
              <span aria-hidden="true">♡</span>
              <p>Personalized Care</p>
            </div>
          </div>

          <a href="/contact" className="doctors-cta-button">
            Book an Appointment
            <span aria-hidden="true">→</span>
          </a>
        </motion.section>
      </section>
    </main>
  );
}

export default Doctors;

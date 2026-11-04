import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import "./Doctors.css";

const doctors = [
  {
    name: "Dr. Kiran Sunny",
    role: "Chief Dentist",
    qualification: "BDS, MDS • Prosthodontist",
    description:
      "Focused on thoughtful treatment planning and long term oral health.",
    image:
      "https://smile-and-glow-flex-public.s3.ap-south-1.amazonaws.com/cms-media/images/kiran-sunny.jpeg",
  },
  {
    name: "Dr. Raijo Thomas",
    role: "Chief Dentist",
    qualification: "BDS",
    description:
      "Dedicated to clear guidance and comfortable dental visits.",
    image:
      "https://smile-and-glow-flex-public.s3.ap-south-1.amazonaws.com/cms-media/images/rajio-thomas.jpeg",
  },
  {
    name: "Dr. Sushant",
    role: "Oral Surgeon",
    qualification: "BDS, MDS • Oral Surgeon",
    description:
      "Supporting patients through oral surgery with attentive care.",
    image:
      "https://smile-and-glow-flex-public.s3.ap-south-1.amazonaws.com/cms-media/images/sushant.jpeg",
  },
  {
    name: "Dr. Sirish",
    role: "Endodontist",
    qualification: "BDS, MDS • Endodontist",
    description:
      "Focused on caring treatment for tooth pain and root canal needs.",
    image: "",
  },
  {
    name: "Dr. Sanket",
    role: "Pedodontist",
    qualification: "BDS, MDS • Pedodontist",
    description:
      "Helping children feel safe and comfortable during dental visits.",
    image: "",
  },
  {
    name: "Dr. Martin",
    role: "Endodontist",
    qualification: "BDS, MDS • Endodontist",
    description:
      "Focused on preserving natural teeth and easing dental discomfort.",
    image: "",
  },
  {
    name: "Dr. Sarfaraz",
    role: "General Dentist",
    qualification: "BDS",
    description:
      "Supporting everyday dental health through preventive and restorative care.",
    image: "",
  },
  {
    name: "Dr. Sahar",
    role: "Periodontist",
    qualification: "BDS, MDS • Periodontist",
    description:
      "Focused on gum health and the care of supporting tissues.",
    image: "",
  },
  {
    name: "Dr. Sai Kalyan",
    role: "Orthodontist",
    qualification: "BDS, MDS • Orthodontist",
    description:
      "Helping patients work toward healthier bites and confident smiles.",
    image: "",
  },
  {
    name: "Pramod",
    role: "Manager",
    qualification: "",
    description:
      "Helping make appointments and clinic visits smooth and organized.",
    image: "",
  },
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

function Doctors() {
  const shouldReduceMotion = useReducedMotion();

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

  return (
    <main className="doctors-page">
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

      <section className="doctors-team-section">
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

        <motion.div
          className="doctors-grid"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: shouldReduceMotion ? 0 : 0.1,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
        >
          {doctors.map((doctor) => (
            <motion.article
              className="doctor-card"
              key={doctor.name}
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
                    <span>Smile N Glow</span>
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

                <p className="doctor-description">{doctor.description}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>
    </main>
  );
}

export default Doctors;
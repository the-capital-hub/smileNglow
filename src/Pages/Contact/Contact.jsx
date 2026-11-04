import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import "./Contact.css";

const services = [
  "General Dentistry",
  "Dental Implants",
  "Orthodontic Treatment",
  "Cosmetic Dentistry",
  "Root Canal Treatment",
  "Tooth Extraction",
  "Other",
];

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardReveal = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function Contact() {
  const shouldReduceMotion = useReducedMotion();

  const revealAnimation = shouldReduceMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : reveal;

  const cardAnimation = shouldReduceMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : cardReveal;

  const staggerAnimation = shouldReduceMotion
    ? { hidden: {}, visible: {} }
    : stagger;

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const details = Object.fromEntries(formData.entries());

    const message = [
      "Appointment Request",
      `Name: ${details.fullName}`,
      `Phone: ${details.phone}`,
      `Email: ${details.email || "Not provided"}`,
      `Service: ${details.service}`,
      `Preferred date: ${details.date || "Not selected"}`,
      `Preferred time: ${details.time || "Not selected"}`,
      `Message: ${details.message || "Not provided"}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    form.reset();
  };

  return (
    <main className="contact-page">
      <motion.section
        className="contact-hero"
        variants={revealAnimation}
        initial="hidden"
        animate="visible"
      >
        <div className="contact-hero-content">
          <p className="contact-breadcrumb">
            <span>Home</span>
            <span className="contact-breadcrumb-separator">›</span>
            <span>Contact</span>
          </p>

          <h1>
            Contact <span>Us</span>
          </h1>

          <p className="contact-hero-description">
            We are here to help you with your dental care needs. Get in touch,
            book an appointment, or visit our clinic.
          </p>

          <a className="contact-primary-button" href="#appointment">
            <span aria-hidden="true">▦</span>
            Book an Appointment
          </a>
        </div>
      </motion.section>

      <section className="contact-main-section">
        <motion.header
          className="contact-section-header"
          variants={revealAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <span className="contact-eyebrow">Get in Touch</span>

          <h2>
            Let’s Talk About <span>Your Smile</span>
          </h2>

          <p>
            Have a question, need an appointment, or want to know more about a
            treatment? Our team is happy to assist you.
          </p>
        </motion.header>

        <div className="contact-content-grid">
          <motion.div
            className="contact-details-list"
            variants={staggerAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
          >
            <motion.article
              className="contact-info-card"
              variants={cardAnimation}
            >
              <div className="contact-info-icon" aria-hidden="true">
                <span>⌖</span>
              </div>

              <div className="contact-info-copy">
                <h3>Clinic Address</h3>
                <p>Kantilal Chhotalal,</p>
                <p>Sinhagad Road, Pune, Maharashtra</p>
              </div>

              <a
                className="contact-info-action"
                href="https://www.google.com/maps/search/?api=1&query=Kantilal+Chhotalal+Sinhagad+Road+Pune"
                target="_blank"
                rel="noreferrer"
              >
                <span aria-hidden="true">↗</span>
                Get Directions
              </a>
            </motion.article>

            <motion.article
              className="contact-info-card"
              variants={cardAnimation}
            >
              <div className="contact-info-icon" aria-hidden="true">
                <span>☎</span>
              </div>

              <div className="contact-info-copy">
                <h3>Call Us</h3>
                <p>+91 98765 43210</p>
              </div>

              <a className="contact-info-action" href="tel:+919876543210">
                <span aria-hidden="true">▣</span>
                Call Now
              </a>
            </motion.article>

            <motion.article
              className="contact-info-card"
              variants={cardAnimation}
            >
              <div className="contact-info-icon" aria-hidden="true">
                <span>✉</span>
              </div>

              <div className="contact-info-copy">
                <h3>Email Us</h3>
                <p>care@smilenglowdental.in</p>
              </div>

              <a
                className="contact-info-action"
                href="mailto:care@smilenglowdental.in"
              >
                <span aria-hidden="true">➤</span>
                Send Email
              </a>
            </motion.article>

            <motion.article
              className="contact-info-card"
              variants={cardAnimation}
            >
              <div className="contact-info-icon" aria-hidden="true">
                <span>◉</span>
              </div>

              <div className="contact-info-copy">
                <h3>WhatsApp Us</h3>
                <p>+91 98765 43210</p>
              </div>

              <a
                className="contact-info-action"
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
              >
                <span aria-hidden="true">◉</span>
                Chat Now
              </a>
            </motion.article>
          </motion.div>

          <motion.section
            className="contact-form-card"
            id="appointment"
            variants={revealAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="contact-form-heading">
              <span className="contact-form-heading-icon" aria-hidden="true">
                ▦
              </span>

              <div>
                <h2>Book an Appointment</h2>
                <p>
                  Fill in your details and our team will get back to you
                  shortly.
                </p>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-row">
                <label className="contact-field">
                  <span>
                    Full Name <b>*</b>
                  </span>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Enter your name"
                    autoComplete="name"
                    required
                  />
                </label>

                <label className="contact-field">
                  <span>
                    Phone Number <b>*</b>
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    autoComplete="tel"
                    required
                  />
                </label>
              </div>

              <div className="contact-form-row">
                <label className="contact-field">
                  <span>Email Address</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    autoComplete="email"
                  />
                </label>

                <label className="contact-field">
                  <span>
                    Service / Treatment <b>*</b>
                  </span>
                  <select name="service" defaultValue="" required>
                    <option value="" disabled>
                      Select a service
                    </option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="contact-form-row">
                <label className="contact-field">
                  <span>Preferred Date</span>
                  <input type="date" name="date" />
                </label>

                <label className="contact-field">
                  <span>Preferred Time</span>
                  <select name="time" defaultValue="">
                    <option value="">Select a time</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="02:00 PM">02:00 PM</option>
                    <option value="03:00 PM">03:00 PM</option>
                    <option value="04:00 PM">04:00 PM</option>
                    <option value="05:00 PM">05:00 PM</option>
                    <option value="06:00 PM">06:00 PM</option>
                    <option value="07:00 PM">07:00 PM</option>
                  </select>
                </label>
              </div>

              <label className="contact-field contact-message-field">
                <span>Your Message</span>
                <textarea
                  name="message"
                  rows="3"
                  placeholder="Tell us about your concern (optional)"
                />
              </label>

              <button className="contact-submit-button" type="submit">
                <span aria-hidden="true">▦</span>
                Book Appointment
              </button>
            </form>
          </motion.section>
        </div>

        <motion.div
          className="contact-location-grid"
          variants={staggerAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.section
            className="contact-map-card"
            variants={cardAnimation}
          >
            <iframe
              title="Smile N Glow Dental Clinic location"
              src="https://maps.google.com/maps?q=Kantilal%20Chhotalal%2C%20Sinhagad%20Road%2C%20Pune&t=&z=14&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />

            <div className="contact-map-caption">
              <div>
                <h3>Find Us on Map</h3>
                <p>Kantilal Chhotalal, Sinhagad Road, Pune, Maharashtra</p>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Kantilal+Chhotalal+Sinhagad+Road+Pune"
                target="_blank"
                rel="noreferrer"
              >
                View on Google Maps <span aria-hidden="true">↗</span>
              </a>
            </div>
          </motion.section>

          <motion.section
            className="contact-hours-card"
            variants={cardAnimation}
          >
            <div className="contact-hours-heading">
              <span aria-hidden="true">◷</span>
              <h2>Clinic Timings</h2>
            </div>

            <div className="contact-hours-row">
              <span className="contact-hours-icon" aria-hidden="true">
                ▦
              </span>
              <strong>Monday to Saturday</strong>
              <span>10:00 AM – 8:00 PM</span>
            </div>

            <div className="contact-hours-row">
              <span className="contact-hours-icon" aria-hidden="true">
                ▦
              </span>
              <strong>Sunday</strong>
              <span>10:00 AM – 2:00 PM</span>
            </div>
          </motion.section>
        </motion.div>
      </section>

      <motion.section
        className="contact-cta"
        variants={revealAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="contact-cta-content">
          <p className="contact-cta-eyebrow">Your smile matters</p>

          <h2>
            Ready for a Healthier,
            <span> Brighter Smile?</span>
          </h2>

          <p>
            Book your appointment today and take the first step towards better
            oral health.
          </p>
        </div>

        <a className="contact-cta-button" href="/book-appointment">
          <span aria-hidden="true">▦</span>
          Book an Appointment
          <span aria-hidden="true">›</span>
        </a>
      </motion.section>
    </main>
  );
}

export default Contact;
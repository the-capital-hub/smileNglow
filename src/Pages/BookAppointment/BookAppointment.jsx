import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FaCalendarAlt,
  FaClock,
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaTooth,
  FaShieldAlt,
} from "react-icons/fa";
import "./BookAppointment.css";
import image1 from '../../assets/appointment/image1.png'

const services = [
  "General Dental Checkup",
  "Teeth Cleaning",
  "Cosmetic Dentistry",
  "Dental Implants",
  "Root Canal Treatment",
  "Orthodontic Treatment",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function BookAppointment() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const reduceMotion = useReducedMotion();

  const animation = reduceMotion
    ? {}
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.15 },
        variants: fadeUp,
        transition: { duration: 0.65, ease: "easeOut" },
      };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Appointment request:", formData);
    alert("Thank you. Your appointment request has been received.");
  };

  const today = new Date();
  const localToday = new Date(
    today.getTime() - today.getTimezoneOffset() * 60000
  )
    .toISOString()
    .split("T")[0];

  return (
    <main className="appointment-page">
      <section className="appointment-hero">
        <div className="appointment-hero__overlay" />

        <motion.div className="appointment-hero__content" {...animation}>
          <span className="appointment-eyebrow">
            <FaCalendarAlt />
            Book Your Visit
          </span>

          <h1>
            Your Smile Deserves
            <br />
            <span>Expert Care</span>
          </h1>

          <p>
            Schedule your appointment with our dental care team. We look
            forward to welcoming you.
          </p>
        </motion.div>
      </section>

      <section className="appointment-section">
        <motion.div className="appointment-intro" {...animation}>
          <span className="appointment-kicker">Appointment Request</span>
          <h2>Let’s Plan Your Visit</h2>
          <p>
            Share a few details below and our team will contact you to confirm
            your appointment.
          </p>
        </motion.div>

        <div className="appointment-layout">
          <motion.form
            className="appointment-form"
            onSubmit={handleSubmit}
            {...animation}
          >
            <div className="appointment-form__heading">
              <h3>Appointment Details</h3>
              <p>Fields marked with * are required.</p>
            </div>

            <div className="appointment-fields">
              <label className="appointment-field">
                <span>Full Name *</span>
                <div className="appointment-input-wrap">
                  <FaUser aria-hidden="true" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                  />
                </div>
              </label>

              <label className="appointment-field">
                <span>Phone Number *</span>
                <div className="appointment-input-wrap">
                  <FaPhoneAlt aria-hidden="true" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    pattern="[0-9+\s()]{10,15}"
                    title="Enter a valid phone number"
                    required
                  />
                </div>
              </label>

              <label className="appointment-field appointment-field--full">
                <span>Email Address</span>
                <div className="appointment-input-wrap">
                  <FaEnvelope aria-hidden="true" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                  />
                </div>
              </label>

              <label className="appointment-field appointment-field--full">
                <span>Choose a Service *</span>
                <div className="appointment-input-wrap">
                  <FaTooth aria-hidden="true" />
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a dental service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </label>

              <label className="appointment-field">
                <span>Preferred Date *</span>
                <div className="appointment-input-wrap">
                  <FaCalendarAlt aria-hidden="true" />
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={localToday}
                    required
                  />
                </div>
              </label>

              <label className="appointment-field">
                <span>Preferred Time *</span>
                <div className="appointment-input-wrap">
                  <FaClock aria-hidden="true" />
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a time</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="02:00 PM">02:00 PM</option>
                    <option value="03:00 PM">03:00 PM</option>
                    <option value="04:00 PM">04:00 PM</option>
                    <option value="05:00 PM">05:00 PM</option>
                  </select>
                </div>
              </label>

              <label className="appointment-field appointment-field--full">
                <span>Additional Message</span>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Tell us about your concern or any special request"
                  value={formData.message}
                  onChange={handleChange}
                />
              </label>
            </div>

            <motion.button
              className="appointment-submit"
              type="submit"
              whileHover={reduceMotion ? {} : { y: -3 }}
              whileTap={reduceMotion ? {} : { scale: 0.98 }}
            >
              Request Appointment
              <span aria-hidden="true">↗</span>
            </motion.button>

            <p className="appointment-form__note">
              <FaShieldAlt aria-hidden="true" />
              Your information will be kept private.
            </p>
          </motion.form>

          <motion.aside className="appointment-side" {...animation}>
            <div className="appointment-side__image">
              <img
                src={image1}
                alt="Modern dental clinic"
              />
            </div>

            <div className="appointment-side__content">
              <span className="appointment-kicker">Your Visit</span>
              <h3>Comfortable care, from the very first visit.</h3>
              <p>
                Our team will help you choose a convenient time and guide you
                through your treatment options.
              </p>

              <div className="appointment-side__detail">
                <FaClock aria-hidden="true" />
                <div>
                  <strong>Clinic Hours</strong>
                  <span>Monday to Sunday</span>
                  <span>10:00 AM to 9:00 PM</span>
                </div>
              </div>

              <div className="appointment-side__detail">
                <FaPhoneAlt aria-hidden="true" />
                <div>
                  <strong>Need Assistance?</strong>
                  <span>Call our clinic to schedule your visit.</span>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </section>
    </main>
  );
}
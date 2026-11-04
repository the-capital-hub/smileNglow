import { useState } from "react";
import {
  FaCalendarAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUser,
  FaClock,
  FaTooth,
  
  FaBell,
  FaUsers,
  FaLock,
} from "react-icons/fa";
import { FaShieldHalved } from "react-icons/fa6";
import "./BookAppointment.css";
import image1 from '../../assets/appointment/image1.png'
import { image } from "framer-motion/client";
const services = [
  "General Dental Checkup",
  "Teeth Cleaning",
  "Teeth Whitening",
  "Root Canal Treatment",
  "Dental Implants",
  "Braces and Aligners",
  "Cosmetic Dentistry",
];

const benefits = [
  {
    icon: <FaUsers />,
    title: "Expert Dental Team",
    text: "Experienced and caring specialists",
  },
  {
    icon: <FaCalendarAlt /> ,
    title: "Flexible Scheduling",
    text: "Choose a date and time that works for you",
  },
  {
    icon: <FaBell />,
    title: "Appointment Reminder",
    text: "Get timely updates and reminders",
  },
  {
    icon: <FaShieldHalved />,
    title: "Patient First Approach",
    text: "Comfort, clarity, and personalised care",
  },
];

function BookAppointment() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const updateField = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);

    // Connect this form to your booking API or WhatsApp workflow.
    console.log("Appointment request:", formData);
  };

  return (
    <main className="appointmentPage">
      <section className="appointmentHero">
        <div className="appointmentHeroOverlay" />

        <div className="appointmentHeroContent">
          <p className="appointmentBreadcrumb">Home <span>›</span> Book Appointment</p>

          <h1>
            Book an
            <span> Appointment</span>
          </h1>

          <p className="appointmentHeroText">
            Schedule a visit with our dental experts at your convenience.
          </p>

          <div className="appointmentHighlights">
            <span><FaCalendarAlt /> Easy Booking</span>
            <span><FaShieldHalved /> Secure and Private</span>
            <span><FaClock /> Quick Confirmation</span>
          </div>
        </div>
      </section>

      <section className="appointmentMain">
        <div className="appointmentPhoto">
          <img
            src={image1}
            alt="Patient smiling in a dental clinic"
          />

          <div className="appointmentPhotoCaption">
            <FaTooth />
            <h2>A Healthier Smile Starts with a Visit</h2>
            <span />
          </div>
        </div>

        <div className="appointmentFormCard">
          <div className="appointmentFormHeading">
            <div className="appointmentHeadingIcon">
              <FaCalendarAlt />
            </div>

            <div>
              <h2>Book an <span>Appointment</span></h2>
              <p>Fill in your details and our team will get back to you shortly.</p>
            </div>
          </div>

          {submitted ? (
            <div className="appointmentSuccess" role="status">
              <FaCalendarAlt />
              <h3>Thank you for your request!</h3>
              <p>Our team will contact you to confirm your appointment.</p>
              <button type="button" onClick={() => setSubmitted(false)}>
                Book Another Appointment
              </button>
            </div>
          ) : (
            <form className="appointmentForm" onSubmit={handleSubmit}>
              <label>
                Full Name <span>*</span>
                <div className="appointmentInputWrap">
                  <FaUser />
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Enter your name"
                    value={formData.fullName}
                    onChange={updateField}
                    autoComplete="name"
                    required
                  />
                </div>
              </label>

              <label>
                Phone Number <span>*</span>
                <div className="appointmentInputWrap">
                  <FaPhoneAlt />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={updateField}
                    autoComplete="tel"
                    required
                  />
                </div>
              </label>

              <label>
                Email Address
                <div className="appointmentInputWrap">
                  <FaEnvelope />
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={updateField}
                    autoComplete="email"
                  />
                </div>
              </label>

              <label>
                Service or Treatment <span>*</span>
                <div className="appointmentInputWrap">
                  <FaTooth />
                  <select
                    name="service"
                    value={formData.service}
                    onChange={updateField}
                    required
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </label>

              <label>
                Preferred Date
                <div className="appointmentInputWrap">
                  <FaCalendarAlt />
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={updateField}
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>
              </label>

              <label>
                Preferred Time
                <div className="appointmentInputWrap">
                  <FaClock />
                  <select
                    name="time"
                    value={formData.time}
                    onChange={updateField}
                  >
                    <option value="">Select a time</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="2:00 PM">2:00 PM</option>
                    <option value="3:00 PM">3:00 PM</option>
                    <option value="4:00 PM">4:00 PM</option>
                    <option value="5:00 PM">5:00 PM</option>
                  </select>
                </div>
              </label>

              <label className="appointmentMessageField">
                Your Message
                <textarea
                  name="message"
                  placeholder="Tell us about your concern (optional)"
                  value={formData.message}
                  onChange={updateField}
                  rows="4"
                />
              </label>

              <button className="appointmentSubmit" type="submit">
                <FaCalendarAlt />
                Confirm Appointment
              </button>

              <p className="appointmentPrivacy">
                <FaLock />
                Your information is safe with us and will only be used for
                appointment purposes.
              </p>
            </form>
          )}
        </div>

        <aside className="appointmentBenefits">
          <h2>Why Book with Us?</h2>
          <span className="appointmentBenefitsLine" />

          <div className="appointmentBenefitsList">
            {benefits.map((benefit) => (
              <article className="appointmentBenefit" key={benefit.title}>
                <div className="appointmentBenefitIcon">{benefit.icon}</div>
                <div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.text}</p>
                </div>
              </article>
            ))}
          </div>
        </aside>
      </section>

      

      <section className="appointmentContact">
        <article className="appointmentContactCard">
          <div><FaPhoneAlt /></div>
          <section>
            <h3>Call Us</h3>
            <p>+91 98765 43210</p>
          </section>
        </article>

        <article className="appointmentContactCard">
          <div><FaEnvelope /></div>
          <section>
            <h3>Email Us</h3>
            <p>care@smilenglowdental.in</p>
          </section>
        </article>

        <article className="appointmentContactCard">
          <div><FaMapMarkerAlt /></div>
          <section>
            <h3>Clinic Address</h3>
            <p>Kantilal Chhotalal, Sinhagad Road, Pune, Maharashtra</p>
          </section>
        </article>
      </section>
    </main>
  );
}

export default BookAppointment;
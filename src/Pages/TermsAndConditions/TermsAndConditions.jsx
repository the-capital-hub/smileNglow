import { Link } from "react-router-dom";
import {
  FaCalendarCheck,
  FaCreditCard,
  FaFileContract,
  FaLock,
  FaPhone,
  
  FaTooth,
  FaUserDoctor,
} from "react-icons/fa6";
import { FaShieldHalved } from "react-icons/fa6";
import "./TermsAndConditions.css";

const termsSections = [
  {
    icon: <FaFileContract />,
    title: "Acceptance of Terms",
    content:
      "By accessing our website, booking an appointment, or using our services, you agree to these Terms and Conditions.",
  },
  {
    icon: <FaTooth />,
    title: "Use of Services",
    content:
      "Our dental services are provided for personal use. Please provide accurate and complete information when booking appointments or receiving treatment.",
  },
  {
    icon: <FaCalendarCheck />,
    title: "Appointments and Cancellations",
    content:
      "Appointments may be booked through the available booking channels. Please contact the clinic as early as possible if you need to cancel or reschedule.",
  },
  {
    icon: <FaCreditCard />,
    title: "Payments",
    content:
      "Consultation and treatment charges will be shared before treatment. Payment methods and any applicable refund terms will be explained by the clinic.",
  },
  {
    icon: <FaUserDoctor />,
    title: "Medical Disclaimer",
    content:
      "Website content is for general information and does not replace professional dental advice, diagnosis, or treatment. Consult a qualified dentist for guidance about your dental needs.",
  },
  {
    icon: <FaLock />,
    title: "Privacy",
    content: (
      <>
        Personal information is handled in accordance with our{" "}
        <Link to="/privacy-policy">Privacy Policy</Link>.
      </>
    ),
  },
  {
    icon: <FaShieldHalved />,
    title: "Changes to These Terms",
    content:
      "We may update these Terms and Conditions from time to time. The latest version will be available on this page.",
  },
];

const TermsAndConditions = () => {
  return (
    <main className="terms-page">
      <section className="terms-hero">
        <div className="terms-container">
          <nav className="terms-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">›</span>
            <span>Terms and Conditions</span>
          </nav>

          <p className="terms-eyebrow">Smile & Glow Vasan</p>
          <h1>
            Terms and <span>Conditions</span>
          </h1>
          <div className="terms-title-line" />
          <p className="terms-hero-copy">
            Please read these terms carefully before using our website or
            services.
          </p>
        </div>
      </section>

      <section className="terms-content-section">
        <div className="terms-container">
          <div className="terms-card">
            <div className="terms-intro">
              <div className="terms-intro-icon">
                <FaFileContract />
              </div>
              <div>
                <p className="terms-label">Website information</p>
                <h2>Terms and Conditions</h2>
                <p>
                  These terms explain the basic conditions for using our
                  website and dental services.
                </p>
              </div>
            </div>

            <div className="terms-sections">
              {termsSections.map((section, index) => (
                <article className="terms-item" key={section.title}>
                  <div className="terms-item-icon" aria-hidden="true">
                    {section.icon}
                  </div>
                  <div className="terms-item-content">
                    <span className="terms-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3>{section.title}</h3>
                    <p>{section.content}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="terms-contact">
              <div className="terms-contact-icon">
                <FaPhone />
              </div>
              <div>
                <h3>Questions about these terms?</h3>
                <p>
                  Contact the clinic using the details provided on our contact
                  page.
                </p>
                <Link to="/contact" className="terms-contact-link">
                  View Contact Details <span aria-hidden="true">›</span>
                </Link>
              </div>
            </div>

            <p className="terms-updated">
              Last updated: <span>[Add date]</span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TermsAndConditions;
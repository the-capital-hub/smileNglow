import { Link } from "react-router-dom";
import {
  FaCalendarCheck,
  FaCookieBite,
  FaDatabase,
  FaLaptop,
  FaLock,
  FaRotate,
  FaShareNodes,
  FaShieldHalved,
  FaUser,
  FaUserShield,
} from "react-icons/fa6";
import "./PrivacyPolicy.css";

const privacySections = [
  {
    icon: <FaUser />,
    title: "Information We Collect",
    content:
      "We may collect details such as your name, contact number, email address, appointment details, and relevant dental information that you choose to provide.",
  },
  {
    icon: <FaLaptop />,
    title: "How We Use Your Information",
    content:
      "We use your information to manage appointments, respond to inquiries, provide dental care, and improve our website and services.",
  },
  {
    icon: <FaShareNodes />,
    title: "Information Sharing",
    content:
      "We do not sell your personal information. Information may be shared with service providers when needed to support clinic operations, subject to appropriate safeguards.",
  },
  {
    icon: <FaDatabase />,
    title: "Data Storage and Security",
    content:
      "We take reasonable technical and organizational steps to protect personal information against unauthorized access, loss, misuse, or disclosure.",
  },
  {
    icon: <FaCookieBite />,
    title: "Cookies",
    content:
      "Our website may use cookies or similar technologies to support website functionality and understand how visitors use the site. You can manage cookies through your browser settings.",
  },
  {
    icon: <FaUserShield />,
    title: "Your Privacy Choices",
    content:
      "You may contact us to ask about the personal information you have provided, request a correction, or ask about its deletion, subject to applicable requirements.",
  },
  {
    icon: <FaRotate />,
    title: "Changes to This Policy",
    content:
      "We may update this Privacy Policy from time to time. Any revised version will be published on this page with an updated date.",
  },
];

const PrivacyPolicy = () => {
  return (
    <main className="privacy-page">
      <section className="privacy-hero">
        <div className="privacy-container">
          <nav className="privacy-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">›</span>
            <span>Privacy Policy</span>
          </nav>

          <p className="privacy-eyebrow">Smile and Glow Vasan</p>
          <h1>
            Privacy <span>Policy</span>
          </h1>
          <div className="privacy-title-line" />
          <p className="privacy-hero-copy">
            We value your trust and take care in handling your personal
            information.
          </p>
        </div>
      </section>

      <section className="privacy-content-section">
        <div className="privacy-container">
          <div className="privacy-card">
            <div className="privacy-intro">
              <div className="privacy-intro-icon" aria-hidden="true">
                <FaShieldHalved />
              </div>

              <div>
                <p className="privacy-label">Your information matters</p>
                <h2>Privacy Policy</h2>
                <p>
                  This policy describes how Smile and Glow Vasan may
                  collect, use, and protect information when you visit our
                  website or contact us.
                </p>
              </div>
            </div>

            <div className="privacy-sections">
              {privacySections.map((section, index) => (
                <article className="privacy-item" key={section.title}>
                  <div className="privacy-item-icon" aria-hidden="true">
                    {section.icon}
                  </div>

                  <div className="privacy-item-content">
                    <span className="privacy-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3>{section.title}</h3>
                    <p>{section.content}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="privacy-contact">
              <div className="privacy-contact-icon" aria-hidden="true">
                <FaLock />
              </div>
              <div>
                <h3>Questions about your privacy?</h3>
                <p>
                  Please contact the clinic using the details on our contact
                  page.
                </p>
                <Link to="/contact" className="privacy-contact-link">
                  View Contact Details <span aria-hidden="true">›</span>
                </Link>
              </div>
            </div>

            <p className="privacy-updated">
              Last updated: <span>[Add date]</span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  ShieldCheck,
  Stethoscope,
  Smile,
  Sparkles,
  HeartPulse,
  ScanLine,
  ClipboardCheck,
  HeartHandshake,
} from "lucide-react";
import "./Services.css";

import generalImage from "../../assets/services/general-dentistry.jpg";
import implantImage from "../../assets/services/dental-implants.jpg";
import orthodonticImage from "../../assets/services/orthodontic-treatment.jpg";
import cosmeticImage from "../../assets/services/cosmetic-dentistry.jpg";
import rootCanalImage from "../../assets/services/root-canal.jpg";
import extractionImage from "../../assets/services/tooth-extraction.jpg";

const services = [
  {
    title: "General Dentistry",
    slug: "general-dentistry",
    description:
      "Routine checkups, cleaning and preventive care for long term oral health.",
    image: generalImage,
    icon: Smile,
    alt: "Patient showing a healthy smile",
  },
  {
    title: "Dental Implants",
    slug: "dental-implants",
    description:
      "A lasting option to replace missing teeth and restore your smile.",
    image: implantImage,
    icon: ScanLine,
    alt: "Dental implant model",
  },
  {
    title: "Orthodontic Treatment",
    slug: "orthodontics",
    description:
      "Teeth alignment solutions including braces and clear aligners.",
    image: orthodonticImage,
    icon: Stethoscope,
    alt: "Clear dental aligner",
  },
  {
    title: "Cosmetic Dentistry",
    slug: "cosmetic-dentistry",
    description:
      "Enhance your smile with treatments like whitening and veneers.",
    image: cosmeticImage,
    icon: Sparkles,
    alt: "Cosmetic dental treatment",
  },
  {
    title: "Root Canal Treatment",
    slug: "root-canal-treatment",
    description:
      "Treatment to help save your natural tooth and relieve discomfort.",
    image: rootCanalImage,
    icon: HeartPulse,
    alt: "Root canal treatment model",
  },
  {
    title: "Tooth Extraction",
    slug: "tooth-extraction",
    description:
      "Careful removal of damaged or problematic teeth when needed.",
    image: extractionImage,
    icon: ShieldCheck,
    alt: "Dental extraction instrument",
  },
];

const steps = [
  {
    icon: CalendarDays,
    title: "Consultation",
    text: "Share your concerns and oral health needs.",
  },
  {
    icon: ClipboardCheck,
    title: "Diagnosis",
    text: "Get an examination and a clear treatment plan.",
  },
  {
    icon: Stethoscope,
    title: "Treatment",
    text: "Receive personalized and comfortable care.",
  },
  {
    icon: HeartHandshake,
    title: "Follow Up",
    text: "Get support to maintain a healthy smile.",
  },
];

export default function Services() {
  useEffect(() => {
    const elements = document.querySelectorAll(".services-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -30px 0px" }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="services-page">
      <section className="services-hero">
        <div className="services-hero-inner services-reveal">
          <p className="services-breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">›</span>
            Services
          </p>

          <h1>
            Our <span>Services</span>
          </h1>

          <p className="services-hero-copy">
            Comprehensive dental care for a healthy, beautiful
            and confident smile.
          </p>

          <Link
            className="services-button services-button-orange"
            to="/book-appointment"
          >
            <CalendarDays size={18} aria-hidden="true" />
            Book Appointment
          </Link>
        </div>
      </section>

      <section className="services-list services-container">
        <div className="services-heading services-reveal">
          <span className="services-eyebrow">What We Offer</span>
          <h2>
            Complete Dental Care <span>Services</span>
          </h2>
          <span className="services-heading-line" aria-hidden="true" />
        </div>

        <div className="services-grid">
          {services.map(
            ({ title, slug, description, image, icon: Icon, alt }, index) => (
              <article
                className="service-card services-reveal"
                key={slug}
                style={{ "--services-delay": `${index * 70}ms` }}
              >
                <div className="service-card-image">
                  <img src={image} alt={alt} loading="lazy" />
                </div>

                <span className="service-card-icon">
                  <Icon size={30} strokeWidth={1.7} aria-hidden="true" />
                </span>

                <div className="service-card-content">
                  <h3>{title}</h3>
                  <p>{description}</p>

                  <Link
                    to={`/services/${slug}`}
                    className="service-card-link"
                  >
                    Learn More
                    <ArrowRight size={18} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            )
          )}
        </div>
      </section>

      <section className="services-process services-container services-reveal">
        <div className="services-process-intro">
          <span className="services-eyebrow">Our Process</span>
          <h2>
            Your Treatment <span>Journey</span>
          </h2>
          <p>
            A simple and comfortable process designed around
            your needs and wellbeing.
          </p>
        </div>

        <div className="services-steps">
          {steps.map(({ icon: Icon, title, text }, index) => (
            <div className="services-step" key={title}>
              <span className="services-step-icon">
                <Icon size={30} aria-hidden="true" />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>

              {index < steps.length - 1 && (
                <ArrowRight
                  className="services-step-arrow"
                  size={18}
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="services-cta services-container services-reveal">
        <div className="services-cta-icon" aria-hidden="true">
          <Smile size={44} />
        </div>

        <div className="services-cta-copy">
          <h2>
            Ready to Take Care of <span>Your Smile?</span>
          </h2>
          <p>
            Book an appointment with our dental care team
            and get personalized attention.
          </p>
        </div>

        <Link
          className="services-button services-button-light"
          to="/book-appointment"
        >
          <CalendarDays size={18} aria-hidden="true" />
          Book Appointment
          <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </section>
    </main>
  );
}

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
  Baby,
  Activity,
  Gem,
} from "lucide-react";
import "./Services.css";

import generalImage from "../../assets/services/general-dentistry.jpg";
import implantImage from "../../assets/services/dental-implants.jpg";
import orthodonticImage from "../../assets/services/orthodontic-treatment.jpg";
import cosmeticImage from "../../assets/services/cosmetic-dentistry.jpg";
import rootCanalImage from "../../assets/services/root-canal.jpg";
import extractionImage from "../../assets/services/tooth-extraction.jpg";

const treatmentGroups = [
  {
    title: "Root Canal Treatment",
    description:
      "Treatment options focused on managing infection and helping preserve natural teeth.",
    image: rootCanalImage,
    imageAlt: "Root canal dental treatment",
    icon: HeartPulse,
    treatments: [
      ["Root Canal Treatment", "root-canal-treatment"],
      ["Microscopic Root Canal Treatment", "microscopic-root-canal-treatment"],
      ["Retreatment of Failed Root Canals", "root-canal-retreatment"],
      ["Root Canal Treatment for Primary Teeth", "root-canal-treatment-primary-teeth"],
      ["Periapical Surgery", "periapical-surgery"],
    ],
  },
  {
    title: "Dental Implants",
    description:
      "Explore modern options for replacing missing teeth and restoring dental function.",
    image: implantImage,
    imageAlt: "Dental implant model",
    icon: ScanLine,
    treatments: [
      ["Dental Implants", "dental-implants"],
      ["Immediate Loaded Implants", "immediate-loaded-implants"],
      ["Full Mouth Fixed Ceramic Teeth", "full-mouth-fixed-ceramic-teeth"],
      ["Keyhole Implant and 3D Guided Implants", "keyhole-3d-guided-implants"],
    ],
  },
  {
    title: "Teeth Alignment",
    description:
      "Treatment options designed to improve tooth alignment and bite position.",
    image: orthodonticImage,
    imageAlt: "Orthodontic aligner treatment",
    icon: Smile,
    treatments: [
      ["Metal Braces Treatment", "metal-braces-treatment"],
      ["Ceramic Braces Treatment", "ceramic-braces-treatment"],
      ["Damon Braces Treatment", "damon-braces-treatment"],
      ["Invisalign Treatment", "invisalign-treatment"],
    ],
  },
  {
    title: "Corrective Jaw Surgeries",
    description:
      "Specialist assessment and surgical options for certain jaw alignment concerns.",
    image: orthodonticImage,
    imageAlt: "Dental jaw treatment",
    icon: Activity,
    treatments: [
      ["Maxillary Surgery", "maxillary-surgery"],
      ["Mandibular Surgery", "mandibular-surgery"],
    ],
  },
  {
    title: "Cosmetic Dentistry",
    description:
      "Personalized dental options to improve the appearance of your smile.",
    image: cosmeticImage,
    imageAlt: "Cosmetic dental care",
    icon: Sparkles,
    treatments: [
      ["Cosmetic Dentistry", "cosmetic-dentistry"],
      ["Tooth Colored Restoration", "tooth-colored-restoration"],
      ["Crown Lengthening and Gum Reshaping", "crown-lengthening-gum-reshaping"],
      ["Gingival Depigmentation", "gingival-depigmentation"],
      ["Inlay and Onlay", "inlay-onlay"],
      ["Smile Designing", "smile-designing"],
      ["Space Closure in Anterior Teeth", "space-closure-anterior-teeth"],
      ["Tooth Jewellery", "tooth-jewellery"],
      ["Digital Smile Design", "digital-smile-design"],
      ["Dental Veneers", "dental-veneers"],
      ["Teeth Whitening", "teeth-whitening"],
    ],
  },
  {
    title: "Kids Dentistry",
    description:
      "Dental care and preventive guidance for children at different stages of growth.",
    image: generalImage,
    imageAlt: "Child friendly dental care",
    icon: Baby,
    treatments: [
      ["Pediatric Dentistry", "pediatric-dentistry"],
      ["Growth Modulation", "growth-modulation"],
      ["Early Childhood Caries", "early-childhood-caries"],
      ["Tooth Coloured Fillings", "tooth-coloured-fillings"],
      ["Vital Pulp Therapy", "vital-pulp-therapy"],
      ["Root Canal Treatment for Primary Teeth", "root-canal-treatment-primary-teeth"],
      ["Strip Crowns", "strip-crowns"],
      ["Scaling and Tooth Polishing", "scaling-tooth-polishing"],
      ["Preventive Dentistry", "preventive-dentistry"],
      ["Dental Trauma in Kids", "dental-trauma-kids"],
    ],
  },
];

const additionalServices = [
  {
    title: "General Dentistry",
    slug: "general-dentistry",
    description:
      "Routine checkups, cleaning and preventive care for long term oral health.",
    image: generalImage,
    icon: Smile,
  },
  {
    title: "Tooth Extraction",
    slug: "tooth-extraction",
    description:
      "Professional assessment and care when a tooth needs to be removed.",
    image: extractionImage,
    icon: ShieldCheck,
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
    text: "Receive personalized care from the dental team.",
  },
  {
    icon: HeartHandshake,
    title: "Follow Up",
    text: "Get guidance to maintain your oral health.",
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
            Explore comprehensive dental treatments and personalized care
            designed to support a healthy and confident smile.
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
          <span className="services-eyebrow">Explore Our Treatments</span>
          <h2>
            Complete Dental Care <span>Services</span>
          </h2>
          <span className="services-heading-line" aria-hidden="true" />
          <p className="services-directory-intro">
            Browse our treatment categories to learn about available dental
            care options and find the information you need.
          </p>
        </div>

        <div className="services-category-list">
          {treatmentGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <article
                className="services-category-card services-reveal"
                key={group.title}
                style={{ "--services-delay": `${index * 70}ms` }}
              >
                <div className="services-category-image">
                  <img
                    src={group.image}
                    alt={group.imageAlt}
                    loading="lazy"
                  />
                  <span className="services-category-icon">
                    <Icon size={27} strokeWidth={1.7} aria-hidden="true" />
                  </span>
                </div>

                <div className="services-category-content">
                  <div className="services-category-heading">
                    <div>
                      <span className="services-category-count">
                        CATEGORY {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3>{group.title}</h3>
                    </div>
                    <span className="services-treatment-count">
                      {group.treatments.length} Treatments
                    </span>
                  </div>

                  <p className="services-category-description">
                    {group.description}
                  </p>

                  <div className="services-treatment-links">
                    {group.treatments.map(([title, slug]) => (
                      <Link
                        to={`/services/${slug}`}
                        className="services-treatment-link"
                        key={`${title}-${slug}`}
                      >
                        <span>{title}</span>
                        <ArrowRight size={16} aria-hidden="true" />
                      </Link>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="services-additional services-container services-reveal">
        <div className="services-heading">
          <span className="services-eyebrow">More Dental Care</span>
          <h2>
            General and <span>Preventive Care</span>
          </h2>
        </div>

        <div className="services-additional-grid">
          {additionalServices.map((service) => {
            const Icon = service.icon;

            return (
              <article className="services-additional-card" key={service.slug}>
                <img src={service.image} alt={service.title} loading="lazy" />
                <div className="services-additional-copy">
                  <span className="services-additional-icon">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link to={`/services/${service.slug}`}>
                    Explore Service <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="services-process services-container services-reveal">
        <div className="services-process-intro">
          <span className="services-eyebrow">Our Process</span>
          <h2>
            Your Treatment <span>Journey</span>
          </h2>
          <p>
            A simple and comfortable process designed around your needs
            and wellbeing.
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
            Book an appointment with our dental care team and get
            personalized attention.
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

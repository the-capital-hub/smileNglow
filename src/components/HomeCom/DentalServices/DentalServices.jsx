import {
  ArrowRight,
  Heart,
  Sparkles,
  Syringe,
  Smile,
  BadgeCheck,
} from "lucide-react";

import "./DentalServices.css";

import generalDentistry from "../../../assets/home/general-dentistry.jpg";
import teethCleaning from "../../../assets/home/teeth-cleaning.jpg";
import rootCanal from "../../../assets/home/root-canal.jpg";
import dentalImplants from "../../../assets/home/dental-implants.jpg";
import teethWhitening from "../../../assets/home/teeth-whitening.jpg";
import bracesAligners from "../../../assets/home/braces-aligners.jpg";

const services = [
  {
    title: "General Dentistry",
    description: "Complete dental care for all age groups.",
    image: generalDentistry,
    icon: Smile,
    alt: "General dental examination",
  },
  {
    title: "Teeth Cleaning",
    description: "Remove plaque and keep your smile fresh.",
    image: teethCleaning,
    icon: Sparkles,
    alt: "Professional teeth cleaning",
  },
  {
    title: "Root Canal Treatment",
    description: "Save your natural tooth with expert care.",
    image: rootCanal,
    icon: Syringe,
    alt: "Root canal treatment model",
  },
  {
    title: "Dental Implants",
    description: "A lasting solution for missing teeth.",
    image: dentalImplants,
    icon: BadgeCheck,
    alt: "Dental implant model",
  },
  {
    title: "Teeth Whitening",
    description: "Brighten your smile with professional care.",
    image: teethWhitening,
    icon: Smile,
    alt: "Teeth whitening shade guide",
  },
  {
    title: "Braces and Aligners",
    description: "Straighten your teeth with modern options.",
    image: bracesAligners,
    icon: Heart,
    alt: "Teeth with braces",
  },
];

export default function DentalServices() {
  return (
    <section className="dental-services" aria-labelledby="services-title">
      <div className="dental-services-inner">
        <header className="dental-services-heading">
          <span className="dental-services-eyebrow">
            <Smile size={19} aria-hidden="true" />
            Our Services
          </span>

          <h2 id="services-title">
            Our Dental <span>Services</span>
          </h2>

          <p>
            Comprehensive dental care for a healthier and brighter smile
          </p>

          <span
            className="dental-services-underline"
            aria-hidden="true"
          />
        </header>

        <div className="dental-services-grid">
          {services.map(({ title, description, image, icon: Icon, alt }) => (
            <article className="dental-service-card" key={title}>
              <div className="dental-service-image-wrap">
                <img
                  src={image}
                  alt={alt}
                  className="dental-service-image"
                  loading="lazy"
                />
              </div>

              <div className="dental-service-content">
                <span className="dental-service-icon">
                  <Icon
                    size={27}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </span>

                <h3>{title}</h3>
                <p>{description}</p>

                <a
                  className="dental-service-link"
                  href="/services"
                  aria-label={`Learn more about ${title}`}
                >
                  Learn More
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="dental-services-cta">
          <div className="dental-services-cta-icon">
            <Heart size={36} strokeWidth={1.5} aria-hidden="true" />
          </div>

          <div className="dental-services-cta-copy">
            <h3>
              Healthy Smile <span>Healthier You</span>
            </h3>
            <p>
              Book your appointment today and take the first step towards a
              confident smile.
            </p>
          </div>

          <a
            className="dental-services-cta-button"
            href="/book-appointment"
          >
            Book Appointment
            <ArrowRight size={19} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
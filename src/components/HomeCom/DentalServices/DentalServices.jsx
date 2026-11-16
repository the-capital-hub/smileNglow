
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
    <section
      className="dental-services"
      aria-labelledby="services-title"
    >
      <div className="dental-services-inner">

        {/* SECTION HEADING */}
        <header className="dental-services-heading">

          <span className="dental-services-eyebrow">
            <span className="services-eyebrow-line" />
            <Smile size={19} aria-hidden="true" />
            OUR DENTAL TREATMENTS
            <span className="services-eyebrow-line" />
          </span>

          <h2 id="services-title">
            Our Dental <span>Treatments</span>
          </h2>

          <p>
            Comprehensive dental care for a healthier and brighter smile.
          </p>

        </header>

        {/* TREATMENT CARDS */}
        <div className="dental-services-grid">

          {services.map(
            ({ title, description, image, icon: Icon, alt }, index) => (
              <article
                className="dental-service-card"
                key={title}
                style={{ "--service-index": index }}
              >

                {/* IMAGE */}
                <div className="dental-service-image-wrap">
                  <img
                    src={image}
                    alt={alt}
                    className="dental-service-image"
                    loading="lazy"
                  />
                </div>

                {/* CONTENT */}
                <div className="dental-service-content">

                  <span className="dental-service-icon">
                    <Icon
                      size={23}
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
                    <ArrowRight size={17} aria-hidden="true" />
                  </a>

                </div>

              </article>
            )
          )}

        </div>

        {/* BOTTOM CTA */}
        <div className="dental-services-footer">

          <a
            className="dental-services-view-all"
            href="/services"
          >
            <span>View All Treatments</span>

            <span className="dental-services-view-icon">
              <ArrowRight size={21} aria-hidden="true" />
            </span>
          </a>

          <a
            className="dental-services-book-link"
            href="/book-appointment"
          >
            <Heart size={17} />
            Book Appointment
          </a>

        </div>

      </div>
    </section>
  );
}

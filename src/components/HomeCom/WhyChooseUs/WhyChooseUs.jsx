
import {
  Heart,
  UsersRound,
  MapPin,
  Star,
} from "lucide-react";

import "./WhyChooseUs.css";

import dentistImage from "../../../assets/why-choose/dentist-illustration.png";
import technologyImage from "../../../assets/why-choose/technology-illustration.png";
import comfortImage from "../../../assets/why-choose/comfort-illustration.png";
import careImage from "../../../assets/why-choose/personalized-care-illustration.png";

const features = [
  {
    id: "01",
    image: dentistImage,
    imageAlt: "Dental professional illustration",
    title: "Experienced",
    subtitle: "Dental Professionals",
    description:
      "A skilled and caring team with a commitment to thoughtful dental care.",
  },
  {
    id: "02",
    image: technologyImage,
    imageAlt: "Modern dental technology illustration",
    title: "Advanced",
    subtitle: "Dental Technology",
    description:
      "Modern equipment designed to support accurate and comfortable treatments.",
  },
  {
    id: "03",
    image: comfortImage,
    imageAlt: "Comfortable dental clinic illustration",
    title: "Comfortable",
    subtitle: "Patient Experience",
    description:
      "A calm, hygienic and friendly environment for a comfortable visit.",
  },
  {
    id: "04",
    image: careImage,
    imageAlt: "Personalized dental care illustration",
    title: "Personalized",
    subtitle: "Dental Care",
    description:
      "Treatment plans thoughtfully designed around individual dental needs.",
  },
];

const statistics = [
  {
    icon: Heart,
    value: "10+",
    label: "Years of Experience",
  },
  {
    icon: UsersRound,
    value: "5,000+",
    label: "Happy Patients",
  },
  {
    icon: MapPin,
    value: "3",
    label: "Clinic Branches",
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "Patient Rating",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="wcu-section" id="why-choose-us">
      <div className="wcu-bg-glow wcu-bg-glow-left" />
      <div className="wcu-bg-glow wcu-bg-glow-right" />

      <div className="wcu-container">

        {/* SECTION HEADING */}

        <header className="wcu-heading">
          <div className="wcu-eyebrow">
            <span />
            WHY CHOOSE US
            <span />
          </div>

          <h2>
            Why Choose <span>Smile & Glow?</span>
          </h2>

          <p>
            Trusted dental care with expertise, advanced technology
            and a patient first approach.
          </p>

          <div className="wcu-smile-accent">
            <span />
            <span />
            <span />
          </div>
        </header>

        {/* FEATURE CARDS */}

        <div className="wcu-grid">
          {features.map((feature, index) => (
            <article
              className="wcu-card"
              key={feature.id}
              style={{ "--card-index": index }}
            >
              <div className="wcu-card-visual">
                <div className="wcu-image-halo" />

                <img
                  src={feature.image}
                  alt={feature.imageAlt}
                  className="wcu-feature-image"
                  loading="lazy"
                />

                <span className="wcu-card-index">
                  {feature.id}
                </span>
              </div>

              <div className="wcu-card-content">
                <h3>
                  {feature.title}
                  <span>{feature.subtitle}</span>
                </h3>

                <p>{feature.description}</p>

                <div className="wcu-card-accent" />
              </div>
            </article>
          ))}
        </div>

        {/* STATISTICS RIBBON */}

        <div className="wcu-stats">
          {statistics.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div className="wcu-stat" key={stat.label}>
                <div className="wcu-stat-icon">
                  <Icon size={39} strokeWidth={1.8} />
                </div>

                <div className="wcu-stat-info">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>

                {index !== statistics.length - 1 && (
                  <span className="wcu-stat-divider" />
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

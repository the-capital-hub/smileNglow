
import {
  ArrowRight,
  Heart,
  ShieldCheck,
  UsersRound,
  Stethoscope,
} from "lucide-react";

import "./AboutUs.css";
import aboutImage from "../../../assets/home/about.jpeg";

const features = [
  {
    icon: Stethoscope,
    title: "Experienced Dental Team",
    description:
      "Dedicated professionals focused on your dental care.",
  },
  {
    icon: ShieldCheck,
    title: "Advanced Technology",
    description:
      "Modern technology for a comfortable dental experience.",
  },
  {
    icon: UsersRound,
    title: "Patient First Approach",
    description:
      "Personalized care designed around every smile.",
  },
];

const clinicStats = [
  { value: "8+", label: "Years of Experience" },
  { value: "2,500+", label: "Happy Patients" },
  { value: "25+", label: "Dental Treatments" },
];

export default function AboutUs() {
  return (
    <section className="about-us" aria-labelledby="about-us-title">

      <div className="about-us-inner">

        {/* LEFT IMAGE */}
        <div className="about-us-visual">

          <div className="about-us-image-decoration" />

          <div className="about-us-image-frame">
            <img
              src={aboutImage}
              alt="Smile and Glow dental clinic"
              className="about-us-image"
              loading="lazy"
            />

            <div className="about-us-image-overlay" />

            <div className="about-us-image-badge">
              <div className="about-us-badge-icon">
                <Heart size={21} strokeWidth={1.8} />
              </div>

              <div className="about-us-badge-text">
                <strong>Care With Comfort</strong>
                <span>Every smile matters</span>
              </div>
            </div>
          </div>

          <div className="about-us-image-accent" />

        </div>

        {/* RIGHT CONTENT */}
        <div className="about-us-content">

          <div className="about-us-eyebrow">
            <span className="about-us-eyebrow-line" />
            <Heart size={16} strokeWidth={1.8} />
            <span>ABOUT US</span>
          </div>

          <h2 id="about-us-title">
            About Smile & Glow
            <span> Vasan</span>
          </h2>

          <p className="about-us-description">
            At Smile & Glow Vasan, we are committed to providing
            thoughtful, compassionate and personalized dental care.
            Our goal is to help every patient work towards a healthy,
            confident smile.
          </p>

          {/* FEATURE LIST */}
          <div className="about-us-features">

            {features.map(({ icon: Icon, title, description }, index) => (
              <div
                className="about-us-feature"
                key={title}
                style={{ "--feature-index": index }}
              >

                <div className="about-us-feature-icon">
                  <Icon size={23} strokeWidth={1.8} />
                </div>

                <div className="about-us-feature-content">
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>

                <ArrowRight
                  className="about-us-feature-arrow"
                  size={19}
                />

              </div>
            ))}

          </div>

          {/* CTA */}
          <a href="/about" className="about-us-button">
            <span>Know More About Us</span>

            <span className="about-us-button-icon">
              <ArrowRight size={19} />
            </span>
          </a>

        </div>
      </div>

      {/* BOTTOM STATISTICS */}
      <div className="about-us-stats">

        {clinicStats.map(({ value, label }, index) => (
          <div className="about-us-stat" key={label}>

            <div className="about-us-stat-number">
              {value}
            </div>

            <div className="about-us-stat-label">
              {label}
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

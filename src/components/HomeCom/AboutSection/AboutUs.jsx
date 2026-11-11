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
    title: "Experienced",
    subtitle: "Dental Team",
  },
  {
    icon: ShieldCheck,
    title: "Advanced",
    subtitle: "Technology",
  },
  {
    icon: UsersRound,
    title: "Patient First",
    subtitle: "Approach",
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
        <div className="about-us-visual">
          <div className="about-us-image-frame">
            <img
              src={aboutImage}
              alt="Dentist in a modern dental clinic"
              className="about-us-image"
              loading="lazy"
            />
          </div>

          <span className="about-us-image-accent" aria-hidden="true" />
        </div>

        <div className="about-us-content">
          <span className="about-us-eyebrow">
            <Heart size={17} strokeWidth={1.8} aria-hidden="true" />
            About Us
          </span>

          <h2 id="about-us-title">
            About Smile N Glow Vasan
            <span> </span>
          </h2>

          <p className="about-us-description">
            At Smile N Glow Vasan, we are committed to providing
            thoughtful, compassionate and personalized dental care. Our goal
            is to help every patient work towards a healthy, confident smile.
          </p>

          <div className="about-us-features">
            {features.map(({ icon: Icon, title, subtitle }) => (
              <div className="about-us-feature" key={title}>
                <span className="about-us-feature-icon">
                  <Icon size={31} strokeWidth={1.7} aria-hidden="true" />
                </span>
                <h3>
                  {title}
                  <span>{subtitle}</span>
                </h3>
              </div>
            ))}
          </div>

          <div className="about-us-stats">
            {clinicStats.map(({ value, label }) => (
              <div className="about-us-stat" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>

          <a className="about-us-button" href="/about">
            Know More About Us
            <span className="about-us-button-icon">
              <ArrowRight size={20} aria-hidden="true" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
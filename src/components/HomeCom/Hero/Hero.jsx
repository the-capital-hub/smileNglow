
import {
  ArrowRight,
  CalendarDays,
  Heart,
  ShieldCheck,
  UserRound,
  Sparkles,
  Smile,
  Braces,
  Activity,
} from "lucide-react";

import "./Hero.css";
import heroTooth from "../../../assets/hero-tooth.png";

const services = [
  {
    icon: Sparkles,
    title: "Cosmetic",
    subtitle: "Dentistry",
    className: "sn-service-one",
  },
  {
    icon: Braces,
    title: "Braces &",
    subtitle: "Aligners",
    className: "sn-service-two",
  },
  {
    icon: Activity,
    title: "Dental",
    subtitle: "Implants",
    className: "sn-service-three",
  },
  {
    icon: ShieldCheck,
    title: "Preventive",
    subtitle: "Care",
    className: "sn-service-four",
  },
];

export default function Hero() {
  return (
    <section className="sn-hero">
      <div className="sn-hero-glow sn-glow-one" />
      <div className="sn-hero-glow sn-glow-two" />

      <div className="sn-hero-content">
        <div className="sn-hero-label">
          <Heart size={19} aria-hidden="true" />
          <span>Your smile, our priority</span>
          <span className="sn-label-line" />
        </div>

        <h1 className="sn-hero-title">
          A Healthier Smile.
          <span>A Happier You.</span>
        </h1>

        <p className="sn-hero-description">
          Discover thoughtful dental care, modern treatments and a
          comfortable experience designed around your smile.
        </p>

        <div className="sn-hero-actions">
          <a className="sn-hero-primary" href="/book-appointment">
            <CalendarDays size={19} aria-hidden="true" />
            <span>Book Appointment</span>
            <ArrowRight size={19} aria-hidden="true" />
          </a>

          <a className="sn-hero-secondary" href="/services">
            <span>Explore Services</span>
            <ArrowRight size={19} aria-hidden="true" />
          </a>
        </div>

        <div className="sn-hero-benefits">
          <div className="sn-hero-benefit">
            <span className="sn-benefit-icon">
              <UserRound size={25} aria-hidden="true" />
            </span>
            <span>Experienced<br />Dentists</span>
          </div>

          <div className="sn-hero-benefit">
            <span className="sn-benefit-icon">
              <Heart size={25} aria-hidden="true" />
            </span>
            <span>Modern<br />Equipment</span>
          </div>

          <div className="sn-hero-benefit">
            <span className="sn-benefit-icon">
              <ShieldCheck size={25} aria-hidden="true" />
            </span>
            <span>Personalized<br />Care</span>
          </div>
        </div>
      </div>

      <div className="sn-hero-visual">
        <div className="sn-visual-halo" />
        <div className="sn-visual-orbit sn-orbit-one" />
        <div className="sn-visual-orbit sn-orbit-two" />

        <div className="sn-visual-spark sn-spark-one">✦</div>
        <div className="sn-visual-spark sn-spark-two">✧</div>
        <div className="sn-visual-spark sn-spark-three">✦</div>

        <div className="sn-hero-image">
          <img
            src={heroTooth}
            alt="A realistic three dimensional illustration of a healthy tooth"
          />
        </div>

        {services.map((service) => {
          const Icon = service.icon;

          return (
            <div
              className={`sn-floating-service ${service.className}`}
              key={service.className}
            >
              <Icon size={27} strokeWidth={1.8} aria-hidden="true" />
              <strong>{service.title}</strong>
              <strong>{service.subtitle}</strong>
            </div>
          );
        })}

        <div className="sn-hero-comfort-card">
          <span className="sn-comfort-icon">
            <Smile size={30} aria-hidden="true" />
          </span>

          <div>
            <strong>Care with Comfort</strong>
            <p>Every smile is unique</p>
          </div>
        </div>
      </div>

      <div className="sn-hero-bottom">
        <div className="sn-hero-trust">
          <span className="sn-trust-icon">
            <UserRound size={29} />
          </span>
          <span>Expert<br />Dentists</span>
        </div>

        <div className="sn-trust-divider" />

        <div className="sn-hero-trust">
          <span className="sn-trust-icon">
            <ShieldCheck size={29} />
          </span>
          <span>Advanced<br />Technology</span>
        </div>

        <div className="sn-trust-divider" />

        <div className="sn-hero-trust">
          <span className="sn-trust-icon">
            <Activity size={29} />
          </span>
          <span>Multiple<br />Treatments</span>
        </div>

        <div className="sn-trust-divider" />

        <div className="sn-hero-trust">
          <span className="sn-trust-icon">
            <Heart size={29} />
          </span>
          <span>Patient First<br />Approach</span>
        </div>
      </div>

      <a href="#about" className="sn-hero-scroll">
        <span className="sn-scroll-mouse" />
        <span>Scroll to Explore</span>
        <span className="sn-scroll-arrow" />
      </a>

      <div className="sn-hero-wave" />
    </section>
  );
}

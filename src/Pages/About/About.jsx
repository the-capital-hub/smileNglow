import { useEffect } from "react";
import {
  ArrowRight,
  CalendarDays,
  Heart,
  ShieldCheck,
  UsersRound,
  Stethoscope,
  Target,
  Eye,
  Award,
  MonitorCog,
} from "lucide-react";

import "./About.css";
import aboutImage from "../../assets/about/about.jpeg";
import clinicImage from "../../assets/about/aboutImage.png";

const highlights = [
  { icon: UsersRound, title: "Experienced", subtitle: "Dental Team" },
  { icon: MonitorCog, title: "Modern", subtitle: "Technology" },
  { icon: Heart, title: "Patient", subtitle: "Focused Care" },
];

const reasons = [
  {
    icon: ShieldCheck,
    title: "Safe and Hygienic",
    text: "Careful attention to safety and cleanliness.",
  },
  {
    icon: Award,
    title: "Expert Team",
    text: "Skilled professionals focused on your care.",
  },
  {
    icon: Stethoscope,
    title: "Modern Setup",
    text: "Modern equipment for comfortable treatment.",
  },
  {
    icon: Heart,
    title: "Personalized Care",
    text: "Treatment plans shaped around your needs.",
  },
];

export default function About() {
  useEffect(() => {
    const elements = document.querySelectorAll(".about-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -35px 0px" }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-inner about-reveal">
          <p className="about-breadcrumb">
            <a href="/">Home</a>
            <span aria-hidden="true">›</span>
            About Us
          </p>

          <h1>
            About <span>Us</span>
          </h1>

          <p className="about-hero-copy">
            A modern dental clinic committed to your oral health,
            comfort and a more confident smile.
          </p>

          <a className="about-button about-button-orange" href="/book-appointment">
            <CalendarDays size={18} aria-hidden="true" />
            Book Appointment
          </a>
        </div>
      </section>

      <section className="about-story about-container">
        <div className="about-story-image about-reveal">
          <img
            src={aboutImage}
            alt="Smile and Glow Vasan dental care team"
            loading="lazy"
          />
          <span className="about-image-accent" aria-hidden="true" />
        </div>

        <div className="about-story-content about-reveal">
          <span className="about-eyebrow">Our Story</span>

          <h2>
            Care, Comfort and <span>Confident Smiles</span>
          </h2>

          <p>
            At Smile and Glow Vasan, we are passionate about
            delivering personalized dental care in a comfortable and
            welcoming environment. We combine professional expertise,
            modern technology and a patient first approach to help you
            work towards a healthy and confident smile.
          </p>

          <div className="about-highlights">
            {highlights.map(({ icon: Icon, title, subtitle }) => (
              <div className="about-highlight" key={title}>
                <Icon size={32} strokeWidth={1.7} aria-hidden="true" />
                <h3>
                  {title}
                  <span>{subtitle}</span>
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-purpose about-container about-reveal">
        <article className="about-purpose-card">
          <span className="about-purpose-icon">
            <Target size={30} aria-hidden="true" />
          </span>
          <div>
            <h2>
              Our <span>Mission</span>
            </h2>
            <p>
              To provide reliable, comfortable and personalized dental care
              that helps every patient work towards a healthy smile.
            </p>
          </div>
        </article>

        <article className="about-purpose-card">
          <span className="about-purpose-icon">
            <Eye size={30} aria-hidden="true" />
          </span>
          <div>
            <h2>
              Our <span>Vision</span>
            </h2>
            <p>
              To be a trusted dental clinic known for quality care,
              ethical practice and lasting patient relationships.
            </p>
          </div>
        </article>
      </section>

      <section className="about-difference about-container">
        <div className="about-section-heading about-reveal">
          <span className="about-eyebrow">Why Choose Us</span>
          <h2>
            The Smile and Glow Vasan <span>Difference</span>
          </h2>
          <span className="about-heading-line" aria-hidden="true" />
        </div>

        <div className="about-reasons">
          {reasons.map(({ icon: Icon, title, text }, index) => (
            <article
              className="about-reason about-reveal"
              key={title}
              style={{ "--about-delay": `${index * 80}ms` }}
            >
              <span className="about-reason-icon">
                <Icon size={32} strokeWidth={1.7} aria-hidden="true" />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-gallery about-container about-reveal">
        <img src={clinicImage} alt="Dental clinic treatment room" loading="lazy" />
        <img src={clinicImage} alt="Dental care team at the clinic" loading="lazy" />
        <img src={clinicImage} alt="Welcoming clinic interior" loading="lazy" />
      </section>

      <section className="about-cta about-container about-reveal">
        <div className="about-cta-icon" aria-hidden="true">
          <Heart size={42} />
        </div>

        <div className="about-cta-copy">
          <h2>
            Book Your Dental <span>Consultation</span>
          </h2>
          <p>
            Take the first step towards a healthier, brighter
            and more confident smile.
          </p>
        </div>

        <a className="about-button about-button-light" href="/book-appointment">
          <CalendarDays size={18} aria-hidden="true" />
          Book Appointment
          <ArrowRight size={18} aria-hidden="true" />
        </a>
      </section>
    </main>
  );
}
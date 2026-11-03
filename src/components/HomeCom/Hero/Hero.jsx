import {
  ArrowRight,
  CalendarDays,
  Heart,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import "./Hero.css";
import hero from '../../../assets/hero.png'
export default function Hero() {
  return (
    <section className="sn-hero">
      <div className="sn-hero-content">
        <div className="sn-hero-label">
          <Heart size={20} aria-hidden="true" />
          <span>Your smile, our priority</span>
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
            <CalendarDays size={20} aria-hidden="true" />
            <span>Book Appointment</span>
            <ArrowRight size={20} aria-hidden="true" />
          </a>

          <a className="sn-hero-secondary" href="/services">
            <span>Explore Services</span>
            <ArrowRight size={20} aria-hidden="true" />
          </a>
        </div>

        <div className="sn-hero-benefits">
          <div className="sn-hero-benefit">
            <span className="sn-benefit-icon">
              <UserRound size={27} aria-hidden="true" />
            </span>
            <span>Experienced<br />Dentists</span>
          </div>

          <div className="sn-hero-benefit">
            <span className="sn-benefit-icon">
              <Heart size={27} aria-hidden="true" />
            </span>
            <span>Modern<br />Equipment</span>
          </div>

          <div className="sn-hero-benefit">
            <span className="sn-benefit-icon">
              <ShieldCheck size={27} aria-hidden="true" />
            </span>
            <span>Personalized<br />Care</span>
          </div>
        </div>
      </div>

      <div className="sn-hero-visual">
        <div className="sn-hero-image">
          <img
            src={hero}
            alt="Patient receiving comfortable dental care"
          />
        </div>

        <div className="sn-hero-comfort-card">
          <span className="sn-comfort-icon">
            <Heart size={34} aria-hidden="true" />
          </span>

          <div>
            <strong>Care with Comfort</strong>
            <p>Every smile is unique</p>
          </div>
        </div>
      </div>
    </section>
  );
}
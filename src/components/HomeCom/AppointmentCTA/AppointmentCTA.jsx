
import React from "react";
import {
  CalendarDays,
  ArrowRight,
  Phone,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";

import "./AppointmentCTA.css";
import ctaImage from "../../../assets/home/cta.png";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Experienced",
    subtitle: "Dental Team",
  },
  {
    icon: Sparkles,
    title: "Modern",
    subtitle: "Technology",
  },
  {
    icon: UsersRound,
    title: "Personalized",
    subtitle: "Dental Care",
  },
];

const AppointmentCTA = () => {
  return (
    <section className="appointment-cta">
      <div className="cta-container">

        {/* LEFT CONTENT */}
        <div className="cta-content">

          <div className="cta-label">
            <CalendarDays size={20} />
            <span>Book Your Visit</span>
          </div>

          <h2>
            Your Smile Deserves
            <br />
            the <span>Best Care</span>
          </h2>

          <p className="cta-description">
            Schedule your dental appointment today and take
            the first step towards a healthier, brighter smile.
            Our team is here to make your dental journey
            comfortable and confident.
          </p>

          {/* ACTION BUTTONS */}
          <div className="cta-buttons">
            <a
              href="/book-appointment"
              className="cta-primary-btn"
            >
              <CalendarDays size={22} />
              <span>Book an Appointment</span>
              <ArrowRight size={21} />
            </a>

            <a
              href="tel:+917483456238"
              className="cta-secondary-btn"
            >
              <Phone size={21} />
              <span>Call Us Now</span>
            </a>
          </div>

          {/* BENEFITS */}
          <div className="cta-features">
            {benefits.map((item) => {
              const Icon = item.icon;

              return (
                <div className="cta-feature" key={item.title}>
                  <div className="cta-feature-icon">
                    <Icon size={34} strokeWidth={1.7} />
                  </div>

                  <div className="cta-feature-text">
                    <span>{item.title}</span>
                    <strong>{item.subtitle}</strong>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="cta-visual">

          <div className="cta-orange-frame"></div>

          <div className="cta-image-wrap">
            <img
              src={ctaImage}
              alt="Patient receiving dental care at Smile and Glow Vasan"
            />
          </div>

          {/* DECORATIVE TOOTH */}
          <div className="cta-tooth-decoration">
            <svg
              viewBox="0 0 100 110"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M50 17C38 17 31 9 20 14C5 21 8 40 15 55C21 68 23 83 31 91C40 100 43 70 50 70C57 70 60 100 69 91C77 83 79 68 85 55C92 40 95 21 80 14C69 9 62 17 50 17Z"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <Sparkles size={28} />
          </div>

          <div className="cta-image-caption">
            <span className="cta-caption-icon">
              <ShieldCheck size={22} />
            </span>
            <div>
              <strong>Care You Can Trust</strong>
              <span>Comfortable dental experiences</span>
            </div>
          </div>

        </div>
      </div>

      {/* DECORATIVE WAVES */}
      <div className="cta-wave-back"></div>
      <div className="cta-wave-front"></div>
    </section>
  );
};

export default AppointmentCTA;

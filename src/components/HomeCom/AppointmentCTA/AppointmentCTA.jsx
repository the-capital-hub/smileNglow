import {
  CalendarDays,
  ShieldCheck,
  ArrowUpRight,
  Smile,
} from "lucide-react";

import "./AppointmentCTA.css";
import patientImage from "../../../assets/home/cta.png";

export default function AppointmentCTA() {
  return (
    <section className="appointment-cta">
      <div className="appointment-cta-card">
        <div className="appointment-cta-photo">
          <img
            src={patientImage}
            alt="Patient smiling during a dental appointment"
            className="appointment-cta-image"
            loading="lazy"
          />
        </div>

        <div className="appointment-cta-copy">
          <span className="appointment-cta-label">
            <CalendarDays size={22} aria-hidden="true" />
            Book an Appointment
          </span>

          <h2>
            Ready for a Healthier,
            <span>Brighter Smile?</span>
          </h2>

          <p className="appointment-cta-description">
            Schedule your appointment with our expert dental team and
            experience personalised, comfortable and advanced dental care.
          </p>

          <div className="appointment-cta-benefits">
            <div className="appointment-cta-benefit">
              <span className="appointment-cta-benefit-icon">
                <Smile size={32} aria-hidden="true" />
              </span>
              <strong>Expert Dentists</strong>
            </div>

            <div className="appointment-cta-benefit">
              <span className="appointment-cta-benefit-icon">
                <ShieldCheck size={32} aria-hidden="true" />
              </span>
              <strong>Safe and Hygienic</strong>
            </div>

            <div className="appointment-cta-benefit">
              <span className="appointment-cta-benefit-icon">
                <CalendarDays size={32} aria-hidden="true" />
              </span>
              <strong>Flexible Appointments</strong>
            </div>
          </div>

          <a
            className="appointment-cta-button"
            href="/book-appointment"
          >
            <CalendarDays size={27} aria-hidden="true" />
            <span>Book Appointment</span>
            <ArrowUpRight size={30} aria-hidden="true" />
          </a>
        </div>

        <div className="appointment-cta-tooth" aria-hidden="true">
          <svg viewBox="0 0 120 140" fill="none">
            <path
              d="M60 14C43 14 30 5 17 17C2 31 13 57 20 79C27 101 34 124 46 124C57 124 52 91 62 91C72 91 67 124 79 124C91 124 98 101 105 79C112 57 123 31 108 17C95 5 77 14 60 14Z"
              stroke="currentColor"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="appointment-cta-wave appointment-cta-wave-top" />
        <div className="appointment-cta-wave appointment-cta-wave-bottom" />
      </div>
    </section>
  );
}
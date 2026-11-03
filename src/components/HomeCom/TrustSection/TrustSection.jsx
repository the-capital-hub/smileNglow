import {
  CalendarDays,
  Heart,
  MapPin,
  ShieldCheck,
  UserRound,
  UsersRound,
} from "lucide-react";
import "./TrustSection.css";
import trust from "../../../assets/home/clinic.png";

const trustPoints = [
  {
    icon: UserRound,
    title: "Experienced Dentists",
    description:
      "A skilled and friendly team focused on your dental care.",
  },
  {
    icon: Heart,
    title: "Modern Equipment",
    description:
      "Modern dental technology to support accurate, comfortable care.",
  },
  {
    icon: ShieldCheck,
    title: "Personalized Care",
    description:
      "Care plans shaped around your needs and smile goals.",
  },
  {
    icon: UsersRound,
    title: "Patient First Approach",
    description:
      "A welcoming experience with care and comfort at every visit.",
  },
];

const clinicHighlights = [
  { icon: CalendarDays, value: "10+", label: "Years of Experience" },
  { icon: UsersRound, value: "5,000+", label: "Happy Patients" },
  { icon: Heart, value: "20+", label: "Dental Treatments" },
  { icon: MapPin, value: "2", label: "Clinic Locations" },
];

export default function TrustSection() {
  return (
    <section className="trust-section" aria-labelledby="trust-heading">
      <div className="trust-visual">
        <div className="trust-photo-wrap">
          <img
            src={trust}
            alt="Inside the dental clinic"
            className="trust-photo"
          />
        </div>

        <div className="trust-photo-note">
          <span className="trust-note-icon">
            <Heart size={19} strokeWidth={1.8} aria-hidden="true" />
          </span>
          <div>
            <strong>Care that puts you first</strong>
            <span>Comfortable visits. Confident smiles.</span>
          </div>
        </div>
      </div>

      <div className="trust-content">
        <header className="trust-heading">
          <span className="trust-eyebrow">
            <Heart size={17} strokeWidth={1.8} aria-hidden="true" />
            Why choose us
          </span>

          <h2 id="trust-heading">
            Care you can trust.
            <span> Smiles you can feel good about.</span>
          </h2>

          <p>
            We bring thoughtful dental care, modern technology and a
            patient first approach together to make every visit feel easier.
          </p>
        </header>

        <div className="trust-cards">
          {trustPoints.map(({ icon: Icon, title, description }) => (
            <article className="trust-card" key={title}>
              <span className="trust-card-icon">
                <Icon size={25} strokeWidth={1.8} aria-hidden="true" />
              </span>

              <div className="trust-card-copy">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="trust-highlights">
          {clinicHighlights.map(({ icon: Icon, value, label }) => (
            <div className="trust-highlight" key={label}>
              <span className="trust-highlight-icon">
                <Icon size={19} strokeWidth={1.8} aria-hidden="true" />
              </span>

              <div>
                <strong>{value}</strong>
                <p>{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
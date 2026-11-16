
import {
  MapPin,
  Phone,
  Clock3,
  ArrowUpRight,
  CalendarDays,
  ArrowRight,
} from "lucide-react";

import "./BranchesSection.css";
import image1 from "../../../assets/home/image1.png";

const branches = [
  {
    name: "HSR Layout",
    subtitle: "Smile & Glow Vasan",
    image: image1,
    address:
      "1192, 22nd Cross Road, 24th Main Rd, Sector 2, HSR Layout, Bengaluru, Karnataka 560102",
    phone: "+917483456238",
    displayPhone: "+91 7483456238",
    hours: "Mon to Sun • 10:00 AM to 9:30 PM",
    mapUrl: "https://maps.app.goo.gl/p5MQFinjnTYTe6S39",
  },
  {
    name: "Silk Institute",
    subtitle: "Smile & Glow Vasan",
    image: image1,
    address:
      "Metro Pillar 311, 2nd floor, Shiva Complex, Kanakapura Main Rd, near Elegant Whispering Winds Apartment, Nagegowdanapalya, Bengaluru",
    phone: "+917204428301",
    displayPhone: "+91 7204428301",
    hours: "Mon to Sun • 10:00 AM to 9 PM",
    mapUrl: "https://maps.app.goo.gl/wXWA6bSF5DVKh92h7",
  },
  {
    name: "Jayanagar",
    subtitle: "Smile & Glow Vasan",
    image: image1,
    address:
      "138/37, 6th C Main Road, 4th Block, Jayanagar, Bengaluru, Karnataka 560011",
    phone: "+917760839626",
    displayPhone: "+91 7760839626",
    hours: "Mon to Sun • 10:00 AM to 8 PM",
    mapUrl: "https://maps.app.goo.gl/q9U6PV1MUtMwYsBa8",
  },
];

function BranchesSection() {
  return (
    <section className="branches-section" id="book-appointment">
      <div className="branches-container">

        <header className="branches-header">
          <span className="branches-tag">
            <MapPin size={18} aria-hidden="true" />
            Our Clinic Branches
          </span>

          <h2>
            Find Your Nearest <span>Clinic</span>
          </h2>

          <p>
            Visit our conveniently located clinics and experience
            comfortable, personalized dental care.
          </p>
        </header>

        <div className="branches-list">
          {branches.map((branch, index) => (
            <article className="branch-card" key={branch.name}>

              <div className="branch-image-wrap">
                <img
                  className="branch-image"
                  src={branch.image}
                  alt={`${branch.name} dental clinic`}
                  loading="lazy"
                />

                <span className="branch-image-badge">
                  <MapPin size={16} aria-hidden="true" />
                  {branch.name}
                </span>
              </div>

              <div className="branch-card-content">

                <div className="branch-topline">
                  <span className="branch-number">
                    0{index + 1}
                  </span>
                  <span className="branch-subtitle">
                    {branch.subtitle}
                  </span>
                </div>

                <h3>{branch.name}</h3>

                <div className="branch-details">

                  <div className="branch-item">
                    <span className="branch-item-icon">
                      <MapPin size={20} aria-hidden="true" />
                    </span>
                    <div className="branch-item-content">
                      <strong>Clinic Address</strong>
                      <span>{branch.address}</span>
                    </div>
                  </div>

                  <div className="branch-item">
                    <span className="branch-item-icon">
                      <Phone size={19} aria-hidden="true" />
                    </span>
                    <div className="branch-item-content">
                      <strong>Contact Number</strong>
                      <a href={`tel:${branch.phone}`}>
                        {branch.displayPhone}
                      </a>
                    </div>
                  </div>

                  <div className="branch-item">
                    <span className="branch-item-icon">
                      <Clock3 size={19} aria-hidden="true" />
                    </span>
                    <div className="branch-item-content">
                      <strong>Opening Hours</strong>
                      <span>{branch.hours}</span>
                    </div>
                  </div>

                </div>

                <div className="branch-actions">
                  <a
                    href={branch.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="branch-btn branch-btn-primary"
                  >
                    <MapPin size={17} aria-hidden="true" />
                    Get Directions
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>

                  <a
                    href="/book-appointment"
                    className="branch-btn branch-btn-secondary"
                  >
                    <CalendarDays size={17} aria-hidden="true" />
                    Book Now
                    <ArrowRight size={17} aria-hidden="true" />
                  </a>
                </div>

              </div>
            </article>
          ))}
        </div>

        <div className="branches-bottom-banner">
          <div className="branches-banner-icon">
            <MapPin size={36} aria-hidden="true" />
          </div>

          <div className="branches-banner-content">
            <span>SMILE & GLOW VASAN</span>
            <h3>Find a Clinic Near You</h3>
            <p>
              Quality dental care, just around the corner.
            </p>
          </div>

          <a
            href="/book-appointment"
            className="branches-banner-btn"
          >
            Book Your Visit
            <ArrowRight size={19} aria-hidden="true" />
          </a>
        </div>

      </div>
    </section>
  );
}

export default BranchesSection;

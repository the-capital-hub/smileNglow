import {
  MapPin,
  Phone,
  Clock3,
  CalendarDays,
  ArrowUpRight,
} from "lucide-react";

import "./BranchesSection.css";
import image1 from '../../../assets/home/image1.png'
const branches = [
  {
    name: "HSR Layout",
    subtitle: "Smile & Glow Vasan",
    image: image1,
    address:
      "1192, 22nd Cross Road, 24th Main Rd, Sector 2, HSR Layout, Bengaluru, Karnataka 560102",
    phone: "+917483456238",
    displayPhone: "+91 7483456238",
    hours: "Mon to Sun • 10:30 AM to 9:30 PM",
    mapUrl:
      "https://www.google.com/maps/dir/?api=1&destination=1192%2C%2022nd%20Cross%20Road%2C%2024th%20Main%20Rd%2C%20Sector%202%2C%20HSR%20Layout%2C%20Bengaluru%2C%20Karnataka%20560102",
  },
  {
    name: "Silk Institute",
    subtitle: "Smile & Glow Vasan",
    image: image1,
    address:
      "Metro Pillar 311, 2nd floor, Shiva Complex, Kanakapura Main Rd, near Elegant Whispering Winds Apartment, Nagegowdanapalya, Bengaluru",
    phone: "+917204428301",
    displayPhone: "+91 7204428301",
    hours: "Mon to Sun • 10:30 AM to 9 PM",
    mapUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Metro%20Pillar%20311%202nd%20floor%2C%20Shiva%20Complex%2C%20Kanakapura%20Main%20Rd%2C%20near%20Elegant%20Whispering%20Winds%20Apartment%2C%20Nagegowdanapalya%2C%20Bengaluru%2C%20Karnataka%20560062",
  },
  {
    name: "Jayanagar",
    subtitle: "Smile & Glow Vasan",
    image: image1,
    address:
      "138/37, 6th C Main Road, 4th Block, Jayanagar, Bengaluru, Karnataka 560011",
    phone: "+917760839626",
    displayPhone: "+91 7760839626",
    hours: "Mon to Sun • 10:30 AM to 8 PM",
    mapUrl:
      "https://www.google.com/maps/dir/?api=1&destination=138%2F37%2C%206th%20C%20Main%20Road%2C%204th%20Block%2C%20Jayanagar%2C%20Bengaluru%2C%20Karnataka%20560011",
  },
];

function BranchesSection() {
  return (
    <section className="branches-section" id="book-appointment">
      <div className="branches-container">
        <header className="branches-header">
          <span className="branches-tag">
            <MapPin size={18} aria-hidden="true" />
            Our Branches
          </span>

          <h2>
            Visit Our <span>Bangalore Clinics</span>
          </h2>

          <p>
            Choose the branch nearest to you and connect with our team for
            appointments, consultations, and dental care support.
          </p>
        </header>

        <div className="branches-grid">
          {branches.map((branch) => (
            <article className="branch-card" key={branch.name}>
              <div className="branch-image-wrap">
                <img
                  className="branch-image"
                  src={branch.image}
                  alt={`${branch.name} dental clinic`}
                  loading="lazy"
                />

                <span className="branch-image-badge">
                  <MapPin size={17} aria-hidden="true" />
                  {branch.name}
                </span>
              </div>

              <div className="branch-card-content">
                <h3>{branch.name}</h3>
                <p className="branch-subtitle">{branch.subtitle}</p>

                <div className="branch-details">
                  <div className="branch-item">
                    <span className="branch-item-icon">
                      <MapPin size={23} aria-hidden="true" />
                    </span>
                    <div className="branch-item-content">
                      <strong>Address</strong>
                      <span>{branch.address}</span>
                    </div>
                  </div>

                  <div className="branch-item">
                    <span className="branch-item-icon">
                      <Phone size={22} aria-hidden="true" />
                    </span>
                    <div className="branch-item-content">
                      <strong>Contact</strong>
                      <a href={`tel:${branch.phone}`}>
                        {branch.displayPhone}
                      </a>
                    </div>
                  </div>

                  <div className="branch-item">
                    <span className="branch-item-icon">
                      <Clock3 size={22} aria-hidden="true" />
                    </span>
                    <div className="branch-item-content">
                      <strong>Hours</strong>
                      <span>{branch.hours}</span>
                    </div>
                  </div>
                </div>

                <div className="branch-actions">
                  <a
                    href='/book-appointment'
                    className="branch-btn branch-btn-primary"
                  >
                    <CalendarDays size={18} aria-hidden="true" />
                    Book Now
                  </a>

                  <a
                    href={branch.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="branch-btn branch-btn-secondary"
                  >
                    <MapPin size={18} aria-hidden="true" />
                    Get Directions
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BranchesSection;
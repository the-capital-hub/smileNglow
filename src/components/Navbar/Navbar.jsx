import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Phone, CalendarDays, ChevronDown } from "lucide-react";
import "./Navbar.css";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services", hasMenu: true },
  { label: "Doctors", to: "/doctors" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="navbar">
        <NavLink to="/" className="navbar-brand" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 48 56" role="img">
              <path
                d="M24 7C17 1 7 5 6 16c-1 8 3 14 5 21 2 8 5 14 10 13 4-1 3-10 7-10s3 9 7 10c5 1 8-5 10-13 2-7 6-13 5-21C49 5 39 1 32 7c-3 2-5 2-8 0Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17 16c4 1 7 4 9 8 2-4 5-7 9-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </span>

          <span className="brand-copy">
            <strong>
              Smile <em>N</em> Glow
            </strong>
            <small>Dental Clinic</small>
          </span>
        </NavLink>

        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`navbar-navigation ${menuOpen ? "is-open" : ""}`}>
          <div className="navbar-links">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `navbar-link ${isActive ? "active" : ""}`
                }
                onClick={closeMenu}
              >
                {item.label}
                {item.hasMenu && <ChevronDown size={15} aria-hidden="true" />}
              </NavLink>
            ))}
          </div>

          <div className="navbar-actions">
            <a className="navbar-phone" href="tel:+919876543210">
              <Phone size={17} aria-hidden="true" />
              <span>+91 98765 43210</span>
            </a>

            <NavLink
              to="/book-appointment"
              className="navbar-appointment"
              onClick={closeMenu}
            >
              <CalendarDays size={18} aria-hidden="true" />
              <span>Book Appointment</span>
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
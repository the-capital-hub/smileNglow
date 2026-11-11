import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Menu,
  X,
  Phone,
  CalendarDays,
  ChevronDown,
} from "lucide-react";
import logo from "../../assets/navlogo.png";
import "./Navbar.css";

const serviceItems = [
  { label: "All Services", to: "/services" },
  { label: "General Dentistry", to: "/services/general-dentistry" },
  { label: "Cosmetic Dentistry", to: "/services/cosmetic-dentistry" },
  { label: "Orthodontics", to: "/services/orthodontics" },
  { label: "Dental Implants", to: "/services/dental-implants" },
];

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Doctors", to: "/doctors" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="site-header">
      <div className="navbar">
        <NavLink
          to="/"
          className="navbar-brand"
          aria-label="Smile N Glow Vasan home"
          onClick={closeMenu}
        >
          <img
            className="navbar-logo"
            src={logo}
            alt="Smile N Glow Vasan"
          />
        </NavLink>

        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

        <nav
          className={`navbar-navigation ${menuOpen ? "is-open" : ""}`}
          aria-label="Main navigation"
        >
          <div className="navbar-links">
            {navItems.slice(0, 2).map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `navbar-link ${isActive ? "active" : ""}`
                }
                onClick={closeMenu}
              >
                {item.label}
              </NavLink>
            ))}

            <div className={`navbar-dropdown ${servicesOpen ? "is-open" : ""}`}>
              <button
                className="navbar-link dropdown-toggle"
                type="button"
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen((open) => !open)}
              >
                Services
                <ChevronDown size={15} aria-hidden="true" />
              </button>

              <div className="dropdown-menu">
                {serviceItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      `dropdown-link ${isActive ? "active" : ""}`
                    }
                    onClick={closeMenu}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>

            {navItems.slice(2).map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `navbar-link ${isActive ? "active" : ""}`
                }
                onClick={closeMenu}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="navbar-actions">
            <a className="navbar-phone" href="tel:+919876543210">
              <Phone size={16} aria-hidden="true" />
              <span>+91 7483456238</span>
            </a>

            <NavLink
              to="/book-appointment"
              className="navbar-appointment"
              onClick={closeMenu}
            >
              <CalendarDays size={17} aria-hidden="true" />
              <span>Book Appointment</span>
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
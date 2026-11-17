
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

const treatmentGroups = [
  {
    title: "Root Canal Treatment",
    items: [
      "Root Canal Treatment",
      "Microscopic Root Canal Treatment",
      "Retreatment of Failed Root Canals",
      "Root Canal Treatment for Primary Teeth",
      "Periapical Surgery",
    ],
    slugs: [
      "root-canal-treatment",
      "microscopic-root-canal-treatment",
      "root-canal-retreatment",
      "root-canal-treatment-primary-teeth",
      "periapical-surgery",
    ],
    secondaryTitle: "Teeth Alignment",
    secondaryItems: [
      "Metal Braces Treatment",
      "Ceramic Braces Treatment",
      "Damon Braces Treatment",
      "Invisalign Treatment",
    ],
    secondarySlugs: [
      "metal-braces-treatment",
      "ceramic-braces-treatment",
      "damon-braces-treatment",
      "invisalign-treatment",
    ],
  },
  {
    title: "Dental Implants",
    items: [
      "Dental Implants",
      "Immediate Loaded Implants / Same Day Implants",
      "Full Mouth Fixed Ceramic Teeth",
      "Keyhole Implant / 3D Guided Dental Implants",
    ],
    slugs: [
      "dental-implants",
      "immediate-loaded-implants",
      "full-mouth-fixed-ceramic-teeth",
      "keyhole-3d-guided-implants",
    ],
    secondaryTitle: "Corrective Jaw Surgeries",
    secondaryItems: [
      "Maxillary Surgery",
      "Mandibular Surgery",
    ],
    secondarySlugs: [
      "maxillary-surgery",
      "mandibular-surgery",
    ],
  },
  {
    title: "Cosmetic Dentistry",
    items: [
      "Cosmetic Dentistry",
      "Tooth Colored Restoration",
      "Crown Lengthening / Gum Reshaping",
      "Gingival Depigmentation",
      "Inlay & Onlay",
      "Smile Designing",
      "Space Closure in Anterior Teeth",
      "Tooth Jewellery",
      "Digital Smile Design",
      "Dental Veneers",
      "Teeth Whitening",
    ],
    slugs: [
      "cosmetic-dentistry",
      "tooth-colored-restoration",
      "crown-lengthening-gum-reshaping",
      "gingival-depigmentation",
      "inlay-onlay",
      "smile-designing",
      "space-closure-anterior-teeth",
      "tooth-jewellery",
      "digital-smile-design",
      "dental-veneers",
      "teeth-whitening",
    ],
  },
  {
    title: "Kids Dentistry",
    items: [
      "Pediatric Dentistry",
      "Growth Modulation",
      "Early Childhood Caries",
      "Tooth Coloured Fillings",
      "Vital Pulp Therapy",
      "Root Canal Treatment for Primary Teeth",
      "Strip Crowns",
      "Scaling (Teeth Cleaning) and Tooth Polishing",
      "Preventive Dentistry",
      "Dental Trauma in Kids",
    ],
    slugs: [
      "pediatric-dentistry",
      "growth-modulation",
      "early-childhood-caries",
      "tooth-coloured-fillings",
      "vital-pulp-therapy",
      "root-canal-treatment-primary-teeth",
      "strip-crowns",
      "scaling-tooth-polishing",
      "preventive-dentistry",
      "dental-trauma-kids",
    ],
  },
];

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Doctors", to: "/doctors" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

function TreatmentLinks({ items, slugs, closeMenu }) {
  return (
    <ul className="treatment-menu-list">
      {items.map((label, index) => (
        <li key={`${label}-${index}`}>
          <NavLink
            to={`/services/${slugs[index]}`}
            onClick={closeMenu}
          >
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState(null);

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
    setMobileCategoryOpen(null);
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
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
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

            {/* TREATMENTS MEGA MENU */}
            <div
              className={`navbar-dropdown treatments-dropdown ${
                servicesOpen ? "is-open" : ""
              }`}
              onMouseEnter={() => {
                if (window.innerWidth > 900) {
                  setServicesOpen(true);
                }
              }}
              onMouseLeave={() => {
                if (window.innerWidth > 900) {
                  setServicesOpen(false);
                }
              }}
            >
              <button
                className="navbar-link dropdown-toggle"
                type="button"
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen((open) => !open)}
              >
                Treatments
                <ChevronDown size={15} aria-hidden="true" />
              </button>

              <div className="dropdown-menu treatments-mega-menu">
                <NavLink
                  to="/services"
                  className="treatment-all-link"
                  onClick={closeMenu}
                >
                  View All Treatments
                </NavLink>

                <div className="treatment-mega-grid">
                  {treatmentGroups.map((group, index) => (
                    <div
                      className="treatment-column"
                      key={group.title}
                    >
                      <button
                        type="button"
                        className={`treatment-category-toggle ${
                          mobileCategoryOpen === index ? "expanded" : ""
                        }`}
                        onClick={() =>
                          setMobileCategoryOpen(
                            mobileCategoryOpen === index ? null : index
                          )
                        }
                      >
                        <span>{group.title}</span>
                        <ChevronDown size={15} />
                      </button>

                      <div className="treatment-category-content">
                        <TreatmentLinks
                          items={group.items}
                          slugs={group.slugs}
                          closeMenu={closeMenu}
                        />

                        {group.secondaryTitle && (
                          <>
                            <h4 className="treatment-subheading">
                              {group.secondaryTitle}
                            </h4>

                            <TreatmentLinks
                              items={group.secondaryItems}
                              slugs={group.secondarySlugs}
                              closeMenu={closeMenu}
                            />
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
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
            <a
              className="navbar-phone"
              href="tel:+917483456238"
            >
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

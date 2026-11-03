import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

import {
  MapPin,
  Phone,
  Mail,
  CalendarDays,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";

import "./Footer.css";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Dental Services", href: "/services" },
  { label: "Our Branches", href: "/branches" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact Us", href: "/contact" },
];

const dentalServices = [
  "General Dentistry",
  "Cosmetic Dentistry",
  "Dental Implants",
  "Root Canal Treatment",
  "Orthodontics",
  "Dental Surgery",
];

const branches = [
  {
    name: "Patna Branch",
    address: "Boring Road, Patna",
  },
  {
    name: "Ranchi Branch",
    address: "Harmu Road, Ranchi",
  },
  {
    name: "Gaya Branch",
    address: "Civil Lines, Gaya",
  },
];

const socialLinks = [
  { label: "Instagram", href: "#", icon: FaInstagram },
  { label: "Facebook", href: "#", icon: FaFacebookF },
  { label: "YouTube", href: "#", icon: FaYoutube },
  { label: "LinkedIn", href: "#", icon: FaLinkedinIn },
  { label: "WhatsApp", href: "#", icon: FaWhatsapp },
];

function ToothMark({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 140"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M60 14C43 14 30 5 17 17C2 31 13 57 20 79C27 101 34 124 46 124C57 124 52 91 62 91C72 91 67 124 79 124C91 124 98 101 105 79C112 57 123 31 108 17C95 5 77 14 60 14Z"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="footer-main">
          <div className="footer-brand">
            <a className="footer-brand-heading" href="/" aria-label="Vasu Aesthetics and Dental Care home">
              <span className="footer-brand-mark">
                <ToothMark />
              </span>

              <span className="footer-brand-name">
                <span>Smile N Glow</span>
                <strong>&amp; Dental Care</strong>
              </span>
            </a>

            <p className="footer-brand-description">
              Comprehensive and compassionate dental care with advanced
              technology, for a healthier and brighter smile.
            </p>

            <div className="footer-socials">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="footer-social-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <nav className="footer-column" aria-label="Quick links">
            <h2 className="footer-column-title">Quick Links</h2>
            <span className="footer-title-underline" />

            <ul className="footer-link-list">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>
                    <ChevronRight aria-hidden="true" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-column">
            <h2 className="footer-column-title">Dental Services</h2>
            <span className="footer-title-underline" />

            <ul className="footer-link-list">
              {dentalServices.map((service) => (
                <li key={service}>
                  <a href="/services">
                    <ChevronRight aria-hidden="true" />
                    <span>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h2 className="footer-column-title">Our Branches</h2>
            <span className="footer-title-underline" />

            <ul className="footer-branch-list">
              {branches.map((branch) => (
                <li key={branch.name}>
                  <MapPin aria-hidden="true" />
                  <div>
                    <strong>{branch.name}</strong>
                    <span>{branch.address}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column footer-contact">
            <h2 className="footer-column-title">Get in Touch</h2>
            <span className="footer-title-underline" />

            <ul className="footer-contact-list">
              <li>
                <Phone aria-hidden="true" />
                <a href="tel:+919876543210">+91 98765 43210</a>
              </li>
              <li>
                <Mail aria-hidden="true" />
                <a href="mailto:care@vasudentalcare.com">
                  care@vasudentalcare.com
                </a>
              </li>
              <li>
                <MapPin aria-hidden="true" />
                <span>Patna, Bihar, India</span>
              </li>
            </ul>

            <a className="footer-appointment-button" href="/book-appointment">
              <CalendarDays aria-hidden="true" />
              <span>Book an Appointment</span>
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Vasu Aesthetics &amp; Dental Care.
            All rights reserved.
          </p>

          <nav className="footer-legal-links" aria-label="Legal links">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-of-service">Terms of Service</a>
            <a href="/sitemap">Sitemap</a>
          </nav>

          <div className="footer-bottom-mark" aria-hidden="true">
            <ToothMark />
            <span />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
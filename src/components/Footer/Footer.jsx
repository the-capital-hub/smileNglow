import { Link } from "react-router-dom";
import { MapPin, Phone, Clock3, ArrowUpRight } from "lucide-react";
import logo from "../../assets/navlogo.png";
import image1 from "../../assets/home/image1.png";
import "./Footer.css";

const branches = [
  {
    name: "HSR Layout",
    address: "1192, 22nd Cross Road, HSR Layout, Bengaluru, Karnataka 560102",
    phone: "+917483456238",
    displayPhone: "+91 7483456238",
    hours: "10:30 AM to 9:30 PM",
    mapUrl: "https://www.google.com/maps/dir/?api=1&destination=1192%2C%2022nd%20Cross%20Road%2C%20HSR%20Layout%2C%20Bengaluru",
  },
  {
    name: "Silk Institute",
    address: "Shiva Complex, Kanakapura Main Road, Bengaluru",
    phone: "+917204428301",
    displayPhone: "+91 7204428301",
    hours: "10:30 AM to 9:00 PM",
    mapUrl: "https://www.google.com/maps/dir/?api=1&destination=Shiva%20Complex%2C%20Kanakapura%20Main%20Road%2C%20Bengaluru",
  },
  {
    name: "Jayanagar",
    address: "138/37, 6th C Main Road, Jayanagar, Bengaluru, Karnataka 560011",
    phone: "+917760839626",
    displayPhone: "+91 7760839626",
    hours: "10:30 AM to 8:00 PM",
    mapUrl: "https://www.google.com/maps/dir/?api=1&destination=138%2F37%2C%206th%20C%20Main%20Road%2C%20Jayanagar%2C%20Bengaluru",
  },
];

const quickLinks = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Services", "/services"],
  ["Doctors", "/doctors"],
  ["Gallery", "/gallery"],
  ["Contact", "/contact"],
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src={logo} alt="Smile N Glow Dental Clinic" />
            </Link>

            <p>
              Caring for your smile with comfortable, quality dental care.
            </p>

            <div className="footer-clinic-count">
              <strong>3</strong>
              <span>Clinics in Bangalore</span>
            </div>
          </div>

          <nav className="footer-column" aria-label="Quick links">
            <h3>Quick Links</h3>
            {quickLinks.map(([label, to]) => (
              <Link key={to} to={to}>{label}</Link>
            ))}
          </nav>

          <div className="footer-branches">
            <h3>Our Branches</h3>

            {branches.map((branch) => (
              <article className="footer-branch" key={branch.name}>
                <img src={image1} alt={`${branch.name} clinic`} />

                <div className="footer-branch-info">
                  <h4><MapPin />{branch.name}</h4>
                  <p>{branch.address}</p>
                  <span><Phone /> <a href={`tel:${branch.phone}`}>{branch.displayPhone}</a></span>
                  <span><Clock3 /> Mon to Sun, {branch.hours}</span>
                </div>

                <a
                  className="footer-directions"
                  href={branch.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Directions to ${branch.name}`}
                >
                  <ArrowUpRight />
                </a>
              </article>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Smile & Glow Vasan</p>
          <div>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-and-conditions">Terms and Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
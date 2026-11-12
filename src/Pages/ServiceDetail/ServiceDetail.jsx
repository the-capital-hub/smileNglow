import { Link, useParams } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import "./ServiceDetail.css";

import generalImage from "../../assets/services/general-dentistry.jpg";
import implantImage from "../../assets/services/dental-implants.jpg";
import orthodonticImage from "../../assets/services/orthodontic-treatment.jpg";
import cosmeticImage from "../../assets/services/cosmetic-dentistry.jpg";
import rootCanalImage from "../../assets/services/root-canal.jpg";
import extractionImage from "../../assets/services/tooth-extraction.jpg";

const services = {
  "general-dentistry": {
    title: "General Dentistry",
    subtitle: "Everyday dental care for a healthier smile.",
    image: generalImage,
    imageAlt: "General dental checkup",
    intro:
      "Regular dental visits help you care for your teeth and gums. Our team checks your oral health, discusses your concerns and helps you understand your care options.",
    benefits: [
      "Routine dental examinations",
      "Preventive oral care guidance",
      "Early identification of dental concerns",
      "Personalized care recommendations",
    ],
    steps: [
      ["Consultation", "Discuss your concerns and dental history."],
      ["Examination", "The dentist checks your teeth and gums."],
      ["Care Plan", "Review suitable care and treatment options."],
      ["Follow Up", "Get guidance for maintaining oral health."],
    ],
  },
  "dental-implants": {
    title: "Dental Implants",
    subtitle: "Explore options for replacing missing teeth.",
    image: implantImage,
    imageAlt: "Dental implant model",
    intro:
      "Dental implants may be used to replace missing teeth. Your dentist will assess your oral health and explain whether this treatment is suitable for you.",
    benefits: [
      "A replacement option for missing teeth",
      "A treatment plan based on your needs",
      "Designed to support everyday function",
      "Guidance throughout the treatment process",
    ],
    steps: [
      ["Consultation", "Discuss your dental needs and treatment goals."],
      ["Assessment", "Your dentist evaluates your oral health."],
      ["Treatment Plan", "Review the proposed implant procedure."],
      ["Follow Up", "Receive aftercare and follow-up guidance."],
    ],
  },
  "orthodontics": {
    title: "Orthodontic Treatment",
    subtitle: "Explore options for aligning your teeth and bite.",
    image: orthodonticImage,
    imageAlt: "Clear dental aligner",
    intro:
      "Orthodontic treatment can help move teeth into planned positions over time. Your dentist will discuss suitable options, which may include braces or clear aligners.",
    benefits: [
      "Discuss braces and clear aligner options",
      "Personalized treatment planning",
      "Progress reviews during treatment",
      "Guidance for daily oral hygiene",
    ],
    steps: [
      ["Consultation", "Discuss your smile and alignment concerns."],
      ["Assessment", "Your dentist checks your teeth and bite."],
      ["Treatment", "Begin the recommended alignment plan."],
      ["Review", "Monitor progress and discuss next steps."],
    ],
  },
  "cosmetic-dentistry": {
    title: "Cosmetic Dentistry",
    subtitle: "Personalized care to enhance your smile.",
    image: cosmeticImage,
    imageAlt: "Cosmetic dental treatment",
    intro:
      "Cosmetic dentistry focuses on the appearance of your smile. Your dentist can discuss options such as whitening or veneers based on your dental needs.",
    benefits: [
      "Discuss options for your smile goals",
      "Personalized treatment recommendations",
      "Understand available cosmetic procedures",
      "Receive professional care guidance",
    ],
    steps: [
      ["Consultation", "Share what you would like to improve."],
      ["Assessment", "Review your teeth and oral health."],
      ["Treatment Plan", "Discuss suitable cosmetic options."],
      ["Review", "Check your progress and aftercare needs."],
    ],
  },
  "root-canal-treatment": {
    title: "Root Canal Treatment",
    subtitle: "Care for a tooth affected by infection or damage.",
    image: rootCanalImage,
    imageAlt: "Root canal treatment model",
    intro:
      "Root canal treatment may help save a natural tooth when its inner tissue is infected or damaged. Your dentist will explain the procedure and appropriate options.",
    benefits: [
      "Assessment of the affected tooth",
      "Treatment planning based on your needs",
      "Guidance about the procedure",
      "Aftercare and follow-up advice",
    ],
    steps: [
      ["Examination", "Your dentist assesses the affected tooth."],
      ["Diagnosis", "Discuss the findings and treatment options."],
      ["Treatment", "Receive the recommended dental procedure."],
      ["Restoration", "Review restoration and aftercare needs."],
    ],
  },
  "tooth-extraction": {
    title: "Tooth Extraction",
    subtitle: "Professional care when a tooth needs to be removed.",
    image: extractionImage,
    imageAlt: "Dental extraction instrument",
    intro:
      "Tooth extraction may be recommended when a tooth cannot be treated or needs to be removed for another dental reason. Your dentist will explain the options and aftercare.",
    benefits: [
      "Assessment of the tooth and surrounding area",
      "Clear explanation of treatment options",
      "Professional care during the procedure",
      "Guidance for recovery and aftercare",
    ],
    steps: [
      ["Consultation", "Discuss your symptoms and concerns."],
      ["Assessment", "Your dentist examines the affected tooth."],
      ["Procedure", "Review the recommended extraction plan."],
      ["Aftercare", "Receive recovery instructions and follow-up advice."],
    ],
  },
};

export default function ServiceDetail() {
  const { slug } = useParams();

console.log("Current URL Slug:", slug);
console.log("Available Services:", Object.keys(services));

const service = services[slug];

console.log("Matched Service:", service);

  if (!service) {
    return (
      <main className="service-detail-not-found">
        <h1>Service not found</h1>
        <p>Please return to the services page to choose a treatment.</p>
        <Link to="/services" className="service-detail-button">
          View Services
          <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </main>
    );
  }

  return (
    <main className="service-detail-page">
      <section
        className="service-detail-hero"
        style={{ "--service-hero-image": `url("${service.image}")` }}
      >
        <div className="service-detail-hero-shade" />

        <div className="service-detail-hero-content">
          <nav className="service-detail-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">›</span>
            <Link to="/services">Services</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">{service.title}</span>
          </nav>

          <span className="service-detail-eyebrow">Smile & Glow Vasan</span>
          <h1>{service.title}</h1>
          <p>{service.subtitle}</p>

          <Link
            to="/book-appointment"
            className="service-detail-button service-detail-button-orange"
          >
            <CalendarDays size={18} aria-hidden="true" />
            Book Appointment
          </Link>
        </div>
      </section>

      <section className="service-detail-overview service-detail-container">
        <div className="service-detail-image">
          <img src={service.image} alt={service.imageAlt} />
        </div>

        <div className="service-detail-copy">
          <span className="service-detail-eyebrow">About The Service</span>
          <h2>Care Designed Around Your Smile</h2>
          <p>{service.intro}</p>

          <div className="service-detail-benefits">
            {service.benefits.map((benefit) => (
              <div className="service-detail-benefit" key={benefit}>
                <CheckCircle2 size={19} aria-hidden="true" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-detail-process service-detail-container">
        <div className="service-detail-process-heading">
          <span className="service-detail-eyebrow">Your Visit</span>
          <h2>What To Expect</h2>
          <p>
            Our team will explain each step and help you understand your care
            options.
          </p>
        </div>

        <div className="service-detail-steps">
          {service.steps.map(([title, description], index) => (
            <article className="service-detail-step" key={title}>
              <span className="service-detail-step-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="service-detail-note service-detail-container">
        <div className="service-detail-note-icon">
          <ShieldCheck size={28} aria-hidden="true" />
        </div>

        <div className="service-detail-note-copy">
          <h2>Personalized Dental Care</h2>
          <p>
            Every treatment starts with an assessment. Your dentist will explain
            the suitable options, expected steps and aftercare for your needs.
          </p>
        </div>
      </section>

      <section className="service-detail-cta service-detail-container">
        <div className="service-detail-cta-icon" aria-hidden="true">
          <Sparkles size={34} />
        </div>

        <div className="service-detail-cta-copy">
          <span>Smile & Glow Vasan</span>
          <h2>Ready to Plan Your Visit?</h2>
          <p>Contact our team to discuss your dental care options.</p>
        </div>

        <Link
          to="/book-appointment"
          className="service-detail-button service-detail-button-light"
        >
          <CalendarDays size={18} aria-hidden="true" />
          Book Appointment
          <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </section>
    </main>
  );
}
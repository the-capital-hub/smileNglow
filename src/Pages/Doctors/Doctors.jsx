import React from "react";
import "./Doctors.css";

const doctors = [
  {
    name: "Dr. Kiran Sunny",
    role: "Chief Dentist",
    qualification: "BDS, MDS • Prosthodontist",
    description:
      "Focused on thoughtful treatment planning and long term oral health.",
    image:
      "https://smile-and-glow-flex-public.s3.ap-south-1.amazonaws.com/cms-media/images/kiran-sunny.jpeg",
  },
  {
    name: "Dr. Raijo Thomas",
    role: "Chief Dentist",
    qualification: "BDS",
    description:
      "Dedicated to clear guidance and comfortable dental visits.",
    image:
      "https://smile-and-glow-flex-public.s3.ap-south-1.amazonaws.com/cms-media/images/rajio-thomas.jpeg",
  },
  {
    name: "Dr. Sushant",
    role: "Oral Surgeon",
    qualification: "BDS, MDS • Oral Surgeon",
    description:
      "Supporting patients through oral surgery with attentive care.",
    image:
      "https://smile-and-glow-flex-public.s3.ap-south-1.amazonaws.com/cms-media/images/sushant.jpeg",
  },
  {
    name: "Dr. Sirish",
    role: "Endodontist",
    qualification: "BDS, MDS • Endodontist",
    description:
      "Focused on caring treatment for tooth pain and root canal needs.",
    image: "",
  },
  {
    name: "Dr. Sanket",
    role: "Pedodontist",
    qualification: "BDS, MDS • Pedodontist",
    description:
      "Helping children feel safe and comfortable during dental visits.",
    image: "",
  },
  {
    name: "Dr. Martin",
    role: "Endodontist",
    qualification: "BDS, MDS • Endodontist",
    description:
      "Focused on preserving natural teeth and easing dental discomfort.",
    image: "",
  },
  {
    name: "Dr. Sarfaraz",
    role: "General Dentist",
    qualification: "BDS",
    description:
      "Supporting everyday dental health through preventive and restorative care.",
    image: "",
  },
  {
    name: "Dr. Sahar",
    role: "Periodontist",
    qualification: "BDS, MDS • Periodontist",
    description:
      "Focused on gum health and the care of supporting tissues.",
    image: "",
  },
  {
    name: "Dr. Sai Kalyan",
    role: "Orthodontist",
    qualification: "BDS, MDS • Orthodontist",
    description:
      "Helping patients work toward healthier bites and confident smiles.",
    image: "",
  },
  {
    name: "Pramod",
    role: "Manager",
    qualification: "",
    description:
      "Helping make appointments and clinic visits smooth and organized.",
    image: "",
  },
];

function Doctors() {
  return (
    <main className="doctors-page">
      <section className="doctors-hero">
        <div className="doctors-hero-content">
          <p className="doctors-breadcrumb">
            <span>Home</span>
            <span className="breadcrumb-separator">›</span>
            <span>Doctors</span>
          </p>

          <h1>
            Our <span>Doctors</span>
          </h1>

          <h2>Meet the people behind your healthier smile.</h2>

          <p className="doctors-hero-description">
            From your first consultation to your follow up care, our dental
            team is here to make every visit feel comfortable, clear, and
            personal.
          </p>

          <a className="doctors-book-button" href="/contact">
            <span aria-hidden="true">▦</span>
            Book an Appointment
          </a>
        </div>
      </section>

      <section className="doctors-team-section">
        <div className="doctors-benefits">
          <article className="doctors-benefit">
            <span className="benefit-icon" aria-hidden="true">♧</span>
            <div>
              <h3>Experienced Team</h3>
              <p>Specialists across key dental fields</p>
            </div>
          </article>

          <article className="doctors-benefit">
            <span className="benefit-icon" aria-hidden="true">◇</span>
            <div>
              <h3>Patient First Care</h3>
              <p>Comfort, safety, and clear guidance</p>
            </div>
          </article>

          <article className="doctors-benefit">
            <span className="benefit-icon" aria-hidden="true">♡</span>
            <div>
              <h3>Comprehensive Care</h3>
              <p>From prevention to advanced treatments</p>
            </div>
          </article>

          <article className="doctors-benefit">
            <span className="benefit-icon" aria-hidden="true">♡</span>
            <div>
              <h3>Trusted by Patients</h3>
              <p>For quality care and lasting smiles</p>
            </div>
          </article>
        </div>

        <header className="doctors-section-header">
          <span className="doctors-eyebrow">Our Team</span>

          <h2>
            Care Led by <span>Experience.</span> Guided by <span>You.</span>
          </h2>

          <p>
            Our team brings together dental professionals across different
            specialties, so you can receive thoughtful care for your unique
            needs. We take time to listen, explain your options, and help you
            feel confident at every step.
          </p>
        </header>

        <div className="doctors-grid">
          {doctors.map((doctor) => (
            <article className="doctor-card" key={doctor.name}>
              <div className="doctor-image">
                {doctor.image ? (
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    loading="lazy"
                  />
                ) : (
                  <div className="doctor-image-placeholder">
                    <span className="placeholder-mark" aria-hidden="true">
                      ♡
                    </span>
                    <span>Smile N Glow</span>
                  </div>
                )}
              </div>

              <div className="doctor-content">
                <h3>{doctor.name}</h3>
                <span className="doctor-role">{doctor.role}</span>

                {doctor.qualification && (
                  <p className="doctor-qualification">
                    <span className="qualification-icon" aria-hidden="true">
                      ✦
                    </span>
                    {doctor.qualification}
                  </p>
                )}

                <p className="doctor-description">{doctor.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Doctors;
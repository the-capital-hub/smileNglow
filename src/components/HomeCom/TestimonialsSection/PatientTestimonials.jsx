import "./PatientTestimonials.css";

const reviews = [
  {
    name: "Priya Sharma",
    location: "Pune, Maharashtra",
    image: "/images/patient-priya.jpg",
    review:
      "A very comfortable and professional experience. The team is friendly and explained the treatment clearly. Highly recommended!",
  },
  {
    name: "Rohit Verma",
    location: "Pune, Maharashtra",
    image: "/images/patient-rohit.jpg",
    review:
      "I did my root canal treatment here and it was completely painless. The clinic is clean, modern and well equipped.",
  },
  {
    name: "Ananya Desai",
    location: "Pune, Maharashtra",
    image: "/images/patient-ananya.jpg",
    review:
      "Excellent dental care and a very supportive team. My teeth cleaning session was quick, gentle and effective. I am very happy with the results.",
  },
];

function PatientTestimonials() {
  return (
    <section className="testimonials-section">
      <div className="testimonial-tooth" aria-hidden="true">
        ♡
      </div>

      <div className="testimonials-heading">
        <span className="testimonials-label">
          <span className="label-icon">☏</span>
          Patient Testimonials
        </span>

        <h2>
          What Our <span>Patients Say</span>
        </h2>

        <p>
          Real experiences from our happy patients who trusted us with their
          smile.
        </p>
      </div>

      <div className="testimonials-carousel">
        <button
          className="testimonial-arrow testimonial-arrow-left"
          type="button"
          aria-label="Previous reviews"
        >
          ‹
        </button>

        <div className="testimonial-grid">
          {reviews.map((review) => (
            <article className="testimonial-card" key={review.name}>
              <div className="testimonial-card-top">
                <img
                  className="patient-photo"
                  src={review.image}
                  alt={review.name}
                  loading="lazy"
                />

                <div className="patient-details">
                  <h3>{review.name}</h3>
                  <p className="patient-location">
                    <span aria-hidden="true">●</span> {review.location}
                  </p>
                  <div className="patient-stars" aria-label="5 out of 5 stars">
                    ★★★★★
                  </div>
                </div>

                <span className="quote-mark" aria-hidden="true">
                  ”
                </span>
              </div>

              <div className="testimonial-divider" />

              <p className="patient-review">{review.review}</p>
              <div className="testimonial-card-wave" aria-hidden="true" />
            </article>
          ))}
        </div>

        <button
          className="testimonial-arrow testimonial-arrow-right"
          type="button"
          aria-label="Next reviews"
        >
          ›
        </button>
      </div>

      <div className="testimonial-dots" aria-hidden="true">
        <span className="active" />
        <span />
        <span />
      </div>

      <div className="testimonial-stats">
        <div className="testimonial-stat">
          <div className="stat-icon" aria-hidden="true">♧</div>
          <div>
            <strong>2,500+</strong>
            <span>Happy Patients</span>
          </div>
        </div>

        <div className="testimonial-stat">
          <div className="stat-icon" aria-hidden="true">✧</div>
          <div>
            <strong>4.9/5</strong>
            <span>Patient Rating</span>
          </div>
        </div>

        <div className="testimonial-stat">
          <div className="stat-icon" aria-hidden="true">✓</div>
          <div>
            <strong>8+</strong>
            <span>Years of Trusted Care</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PatientTestimonials;

import { useRef } from "react";
import "./PatientTestimonials.css";

import image from "../../../assets/image2.png";
import image1 from "../../../assets/testi/image1.png";
import image2 from "../../../assets/testi/image2.png";
import image3 from "../../../assets/testi/image3.png";
import image4 from "../../../assets/testi/image4.png";

const reviews = [
  {
    name: "Vivek Jain",
    location: "Bengaluru, Karnataka",
    image,
    review:
      "A very comfortable and professional experience. The team is friendly and explained the treatment clearly. Highly recommended!",
  },
  {
    name: "Nalini Mahanty",
    location: "Bengaluru, Karnataka",
    image: image4,
    review:
      "The treatment service has been really good. Got my RCT done here 2 weeks prior and it's been great. It cost me around 7k, pretty good price for Bangalore. My mom got her extraction done too. Highly recommended",
  },
  {
    name: "Aruna A",
    location: "Bengaluru, Karnataka",
    image: image3,
    review:
      "I have got my wisdom tooth. Before coming here I had visited few clinics which they scared me to hell but here they really take care of our emotions and let me feel comfortable. The extraction was really painless and I was at ease. Extraordinary service for their team. Highly recommended",
  },
  {
    name: "Sarath Meluveetil",
    location: "Bengaluru, Karnataka",
    image: image2,
    review:
      "I had an excellent experience at this dental clinic. The team is highly professional, approachable, and always willing to help. Dr. Kiran Sunny, in particular, stands out for his expertise and the courteous way he interacts with patients. He takes the time to explain every detail clearly, ensuring that I understood the treatment options and felt comfortable throughout the process. His professionalism, combined with his kind and patient nature, truly makes a difference. I would highly recommend this clinic to anyone seeking quality dental care with a personal touch.",
  },
  {
    name: "Sandip Kumar",
    location: "Bengaluru, Karnataka",
    image: image1,
    review:
      "I had a great experience at Smile & Glow Vasan. I went for teeth cleaning, polishing, and filing, and the entire procedure was smooth and comfortable. The doctor was very knowledgeable, explained everything clearly, and made sure I was at ease throughout the treatment. The staff was professional, and the clinic was clean and well-maintained. I'm very satisfied with the treatment and would definitely recommend Smile & Glow Vasan to anyone looking for quality dental care.",
  },
];

function PatientTestimonials() {
  const sliderRef = useRef(null);

  const scrollSlider = (direction) => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;

    slider.scrollBy({
      left: direction * slider.clientWidth * 0.8,
      behavior: "smooth",
    });
  };

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
          onClick={() => scrollSlider(-1)}
        >
          ‹
        </button>

        <div className="testimonial-grid" ref={sliderRef}>
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
          onClick={() => scrollSlider(1)}
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

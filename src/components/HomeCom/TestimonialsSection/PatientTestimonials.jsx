
import { useRef, useState, useEffect } from "react";
import "./PatientTestimonials.css";

import image1 from "../../../assets/testi/image1.png";
import image2 from "../../../assets/testi/image2.png";
import image3 from "../../../assets/testi/image3.png";
import image4 from "../../../assets/testi/image4.png";
import image5 from "../../../assets/testi/image5.png";

const reviews = [
  {
    name: "Vivek Jain",
    location: "Bengaluru, Karnataka",
    image: image5,
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

  const [activeReview, setActiveReview] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [selectedReview, setSelectedReview] = useState(null);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth <= 700) {
        setVisibleCards(1);
      } else if (window.innerWidth <= 1100) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);

    return () => {
      window.removeEventListener("resize", updateVisibleCards);
    };
  }, []);

  const maxIndex = Math.max(0, reviews.length - visibleCards);

  const scrollToReview = (index) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const cards = slider.querySelectorAll(".testimonial-card");
    if (!cards.length) return;

    const safeIndex = Math.max(0, Math.min(index, maxIndex));

    const targetPosition =
      cards[safeIndex].offsetLeft - cards[0].offsetLeft;

    slider.scrollTo({
      left: targetPosition,
      behavior: "smooth",
    });

    setActiveReview(safeIndex);
  };

  const scrollSlider = (direction) => {
    scrollToReview(activeReview + direction);
  };

  const handleSliderScroll = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const cards = Array.from(
      slider.querySelectorAll(".testimonial-card")
    );

    if (!cards.length) return;

    const firstOffset = cards[0].offsetLeft;

    let closestIndex = 0;
    let closestDistance = Infinity;

    cards.forEach((card, index) => {
      if (index > maxIndex) return;

      const cardPosition = card.offsetLeft - firstOffset;
      const distance = Math.abs(slider.scrollLeft - cardPosition);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveReview(closestIndex);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const cards = slider.querySelectorAll(".testimonial-card");
    if (!cards.length) return;

    const safeIndex = Math.min(activeReview, maxIndex);

    const targetPosition =
      cards[safeIndex].offsetLeft - cards[0].offsetLeft;

    slider.scrollTo({
      left: targetPosition,
      behavior: "instant",
    });

    if (safeIndex !== activeReview) {
      setActiveReview(safeIndex);
    }
  }, [visibleCards, maxIndex]);

  // Close popup with Escape and prevent background scrolling
  useEffect(() => {
    if (!selectedReview) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedReview(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedReview]);

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
          Real experiences from our happy patients
          who trusted us with their smile.
        </p>
      </div>

      <div className="testimonials-carousel">
        <button
          className="testimonial-arrow testimonial-arrow-left"
          type="button"
          aria-label="Previous reviews"
          disabled={activeReview === 0}
          onClick={() => scrollSlider(-1)}
        >
          ‹
        </button>

        <div
          className="testimonial-grid"
          ref={sliderRef}
          onScroll={handleSliderScroll}
        >
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
                    <span aria-hidden="true">●</span>{" "}
                    {review.location}
                  </p>

                  <div
                    className="patient-stars"
                    aria-label="5 out of 5 stars"
                  >
                    ★★★★★
                  </div>
                </div>

                <span className="quote-mark" aria-hidden="true">
                  ”
                </span>
              </div>

              <div className="testimonial-divider" />

              <p className="patient-review">
                {review.review}
              </p>

              {review.review.length > 150 && (
                <button
                  type="button"
                  className="testimonial-read-more"
                  onClick={() => setSelectedReview(review)}
                >
                  Read More <span aria-hidden="true">↗</span>
                </button>
              )}

              <div
                className="testimonial-card-wave"
                aria-hidden="true"
              />
            </article>
          ))}
        </div>

        <button
          className="testimonial-arrow testimonial-arrow-right"
          type="button"
          aria-label="Next reviews"
          disabled={activeReview >= maxIndex}
          onClick={() => scrollSlider(1)}
        >
          ›
        </button>
      </div>

      <div className="testimonial-dots">
        {Array.from({ length: maxIndex + 1 }, (_, index) => (
          <button
            key={index}
            type="button"
            className={activeReview === index ? "active" : ""}
            aria-label={`Go to review ${index + 1}`}
            aria-current={
              activeReview === index ? "true" : undefined
            }
            onClick={() => scrollToReview(index)}
          />
        ))}
      </div>

      <div className="testimonial-stats">
        <div className="testimonial-stat">
          <div className="stat-icon" aria-hidden="true">
            ♧
          </div>
          <div>
            <strong>2,500+</strong>
            <span>Happy Patients</span>
          </div>
        </div>

        <div className="testimonial-stat">
          <div className="stat-icon" aria-hidden="true">
            ✧
          </div>
          <div>
            <strong>4.9/5</strong>
            <span>Patient Rating</span>
          </div>
        </div>

        <div className="testimonial-stat">
          <div className="stat-icon" aria-hidden="true">
            ✓
          </div>
          <div>
            <strong>8+</strong>
            <span>Years of Trusted Care</span>
          </div>
        </div>
      </div>

      {/* Full Review Popup */}
      {selectedReview && (
        <div
          className="testimonial-modal-overlay"
          onClick={() => setSelectedReview(null)}
        >
          <div
            className="testimonial-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="testimonial-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="testimonial-modal-close"
              aria-label="Close review"
              onClick={() => setSelectedReview(null)}
            >
              ×
            </button>

            <div className="testimonial-modal-heading">
              <img
                src={selectedReview.image}
                alt={selectedReview.name}
                className="testimonial-modal-photo"
              />

              <div>
                <h3 id="testimonial-modal-title">
                  {selectedReview.name}
                </h3>
                <p>{selectedReview.location}</p>
                <div className="patient-stars">★★★★★</div>
              </div>
            </div>

            <div className="testimonial-divider" />

            <div className="testimonial-modal-review">
              {selectedReview.review}
            </div>

            <div className="testimonial-modal-footer">
              <span>Patient Experience</span>
              <button
                type="button"
                onClick={() => setSelectedReview(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default PatientTestimonials;

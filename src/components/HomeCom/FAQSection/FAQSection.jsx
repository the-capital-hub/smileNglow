
import React, { useState } from "react";
import {
  MessageSquare,
  ChevronDown,
  CalendarDays,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import "./FAQSection.css";
import faqImage from "../../../assets/home/faq-image.png";

const faqs = [
  {
    question: "How often should I visit the dentist?",
    answer:
      "We recommend a dental checkup and cleaning every 6 months. Regular visits help in early detection of dental issues and keep your teeth and gums healthy.",
  },
  {
    question: "Are dental treatments painful?",
    answer:
      "Your comfort is our priority. We use modern techniques and appropriate anesthesia to make dental treatments as comfortable as possible.",
  },
  {
    question: "How long does a root canal treatment take?",
    answer:
      "A root canal treatment generally takes one or two appointments, depending on the condition of the tooth and the treatment required.",
  },
  {
    question: "Do you offer teeth whitening?",
    answer:
      "Yes, we offer professional teeth whitening treatments designed to improve the appearance of your smile.",
  },
  {
    question: "Can I get a dental implant if I have missing teeth?",
    answer:
      "Dental implants can be an option for replacing missing teeth. Our dentist will examine your oral health and suggest a suitable treatment plan.",
  },
];

const ToothOutline = () => (
  <svg
    className="faq-tooth-outline"
    viewBox="0 0 180 200"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M90 26C72 26 60 12 39 18C13 26 10 54 20 82C29 107 39 117 44 151C48 177 59 190 70 174C80 157 79 119 91 119C103 119 101 157 112 174C123 190 134 177 138 151C143 117 153 107 162 82C172 54 167 26 141 18C120 12 108 26 90 26Z"
      stroke="currentColor"
      strokeWidth="7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="faq-section">
      <ToothOutline />

      <div className="faq-wave faq-wave-back" />
      <div className="faq-wave faq-wave-front" />

      <div className="faq-container">
        <header className="faq-heading">
          <div className="faq-label">
            <MessageSquare size={20} strokeWidth={2.4} />
            <span>FAQ</span>
          </div>

          <h2>
            Frequently Asked <span>Questions</span>
          </h2>

          <p>
            Find answers to common questions about our dental treatments,
            procedures, appointments and care.
          </p>
        </header>

        <div className="faq-content">
          <div className="faq-visual">
            <div className="faq-image-decoration" />

            <div className="faq-image-circle">
              <img
                src={faqImage}
                alt="A patient receiving dental care from a dentist"
              />
            </div>

            <div className="faq-floating-icon faq-tooth-icon">
              <svg
                viewBox="0 0 64 64"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M32 10C24 10 19 5 12 10C4 16 9 29 13 37C17 46 17 57 24 55C29 53 27 36 32 36C37 36 35 53 40 55C47 57 47 46 51 37C55 29 60 16 52 10C45 5 40 10 32 10Z"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M49 5V13M45 9H53"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="faq-floating-icon faq-calendar-icon">
              <CalendarDays size={42} strokeWidth={1.8} />
            </div>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <article
                  className={`faq-item ${isOpen ? "active" : ""}`}
                  key={faq.question}
                >
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-question-icon">
                      <MessageSquare size={25} strokeWidth={2.2} />
                    </span>

                    <span className="faq-question-text">
                      {faq.question}
                    </span>

                    <ChevronDown
                      className="faq-chevron"
                      size={25}
                      strokeWidth={2.5}
                    />
                  </button>

                  <div
                    className={`faq-answer ${isOpen ? "show" : ""}`}
                    aria-hidden={!isOpen}
                  >
                    <div className="faq-answer-inner">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default FAQSection;

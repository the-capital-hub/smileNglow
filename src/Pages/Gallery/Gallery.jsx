import { useState } from "react";
import {
  FaThLarge,
  FaTooth,
  FaCamera,
  FaUsers,
  FaSmile,
  FaCouch,
  FaCalendarAlt,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import "./Gallery.css";
import cta from '../../assets/contact/cta.png'

const galleryItems = [
  {
    id: 1,
    category: "Clinic Interior",
    image: "/images/gallery-reception.jpg",
    alt: "Smile N Glow clinic reception",
  },
  {
    id: 2,
    category: "Treatment Room",
    image: "/images/gallery-treatment-room.jpg",
    alt: "Modern dental treatment room",
  },
  {
    id: 3,
    category: "Clinic Interior",
    image: "/images/gallery-waiting-area.jpg",
    alt: "Comfortable clinic waiting area",
  },
  {
    id: 4,
    category: "Our Team",
    image: "/images/gallery-dentist.jpg",
    alt: "Dentist providing patient care",
  },
  {
    id: 5,
    category: "Facilities",
    image: "/images/gallery-equipment.jpg",
    alt: "Modern dental equipment",
  },
  {
    id: 6,
    category: "Patient Smiles",
    image: "/images/gallery-patient-smile.jpg",
    alt: "Smiling patient after dental care",
  },
  {
    id: 7,
    category: "Facilities",
    image: "/images/gallery-dental-scan.jpg",
    alt: "Digital dental scan",
  },
];

const filters = [
  { label: "All Photos", icon: <FaThLarge /> },
  { label: "Clinic Interior", icon: <FaTooth /> },
  { label: "Treatment Room", icon: <FaCamera /> },
  { label: "Our Team", icon: <FaUsers /> },
  { label: "Patient Smiles", icon: <FaSmile /> },
  { label: "Facilities", icon: <FaCouch /> },
];

function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All Photos");
  const [activeImage, setActiveImage] = useState(null);

  const visibleItems =
    activeFilter === "All Photos"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  const showPrevious = () => {
    const currentIndex = galleryItems.findIndex(
      (item) => item.id === activeImage.id
    );
    const previousIndex =
      (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    setActiveImage(galleryItems[previousIndex]);
  };

  const showNext = () => {
    const currentIndex = galleryItems.findIndex(
      (item) => item.id === activeImage.id
    );
    const nextIndex = (currentIndex + 1) % galleryItems.length;
    setActiveImage(galleryItems[nextIndex]);
  };

  return (
    <main className="galleryPage">
      <section className="galleryHero">
        <div className="galleryHeroShade" />
        <div className="galleryHeroContent">
          <p className="galleryBreadcrumb">Home <span>›</span> Gallery</p>
          <h1>
            Our <span>Gallery</span>
          </h1>
          <p>
            A glimpse of our clinic, advanced facilities, and the smiles we
            have helped create.
          </p>
        </div>
      </section>

      <section className="gallerySection">
        <div className="galleryIntro">
          <span className="galleryEyebrow">Explore Our Clinic</span>
          <h2>
            Moments at Smile <span>N Glow</span>
          </h2>
          <p>
            Take a look at our modern clinic, advanced technology, and the
            comfortable care experience we offer.
          </p>
        </div>

        <div className="galleryFilters" aria-label="Filter gallery photos">
          {filters.map((filter) => (
            <button
              className={
                activeFilter === filter.label
                  ? "galleryFilter active"
                  : "galleryFilter"
              }
              key={filter.label}
              type="button"
              onClick={() => setActiveFilter(filter.label)}
              aria-pressed={activeFilter === filter.label}
            >
              {filter.icon}
              {filter.label}
            </button>
          ))}
        </div>

        <div className="galleryGrid">
          {visibleItems.map((item) => (
            <button
              className="galleryPhoto"
              key={item.id}
              type="button"
              onClick={() => setActiveImage(item)}
              aria-label={`View ${item.alt}`}
            >
              <img src={item.image} alt={item.alt} loading="lazy" />
              <span className="galleryPhotoOverlay">
                <FaCamera />
                View Photo
              </span>
            </button>
          ))}
        </div>
      </section>

      <section className="galleryCta">
        <div className="galleryCtaImage">
          <img
            src={cta}
            alt="Dental care tools in a clinic"
            loading="lazy"
          />
        </div>

        <div className="galleryCtaContent">
          <p>Your Smile Matters</p>
          <h2>
            Ready for Your <span>Next Dental Visit?</span>
          </h2>
          <p>
            Book an appointment today and experience personalised dental care
            in a comfortable environment.
          </p>
          <a href="/book-appointment" className="galleryCtaButton">
            <FaCalendarAlt />
            Book an Appointment
            <span aria-hidden="true">›</span>
          </a>
        </div>
      </section>

      {activeImage && (
        <div
          className="galleryLightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery photo viewer"
          onClick={() => setActiveImage(null)}
        >
          <button
            className="galleryLightboxClose"
            type="button"
            onClick={() => setActiveImage(null)}
            aria-label="Close photo viewer"
          >
            <FaTimes />
          </button>

          <button
            className="galleryLightboxArrow previous"
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label="Previous photo"
          >
            <FaChevronLeft />
          </button>

          <img
            src={activeImage.image}
            alt={activeImage.alt}
            onClick={(event) => event.stopPropagation()}
          />

          <button
            className="galleryLightboxArrow next"
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Next photo"
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </main>
  );
}

export default Gallery;
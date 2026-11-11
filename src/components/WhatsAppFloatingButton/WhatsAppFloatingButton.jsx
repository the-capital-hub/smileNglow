
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppFloatingButton.css";

function WhatsAppFloatingButton() {
  const phoneNumber = "91XXXXXXXXXX";

  const message = encodeURIComponent(
    "Hello Smile N Glow Vasan, I would like to enquire about a dental appointment."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      className="whatsapp-floating-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Smile N Glow Vasan on WhatsApp"
    >
      <FaWhatsapp size={28} />

      <span className="whatsapp-button-label">
        Chat with us
      </span>
    </a>
  );
}

export default WhatsAppFloatingButton;

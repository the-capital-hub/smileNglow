
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoClose, IoSend } from "react-icons/io5";
import "./WhatsAppFloatingButton.css";

function WhatsAppFloatingButton() {
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumber = "917483456238";

  const [message, setMessage] = useState(
    "Hello Smile N Glow Vasan Team,\n\nI would like to reach out to your clinic. Please call me back at your convenience.\n\nThank you."
  );

  const handleWhatsApp = () => {
    const encodedMessage = encodeURIComponent(message);

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="whatsapp-widget">

      {isOpen && (
        <div className="whatsapp-popup">

          <div className="whatsapp-popup-header">
            <div className="whatsapp-popup-brand">
              <div className="whatsapp-popup-icon">
                <FaWhatsapp />
              </div>

              <div>
                <h3>Smile N Glow Vasan</h3>
                <p>How can we help you?</p>
              </div>
            </div>

            <button
              className="whatsapp-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close WhatsApp popup"
            >
              <IoClose />
            </button>
          </div>

          <div className="whatsapp-popup-body">
            <div className="whatsapp-welcome">
              <span>👋</span>
              <div>
                <h4>Hello! Welcome</h4>
                <p>
                  Need a dental appointment or want us to call you back?
                  Send us a message.
                </p>
              </div>
            </div>

            <label htmlFor="whatsapp-message">
              Your message
            </label>

            <textarea
              id="whatsapp-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
            />

            <button
              className="whatsapp-send-button"
              onClick={handleWhatsApp}
              disabled={!message.trim()}
            >
              <FaWhatsapp />
              Send Message
              <IoSend />
            </button>

            <p className="whatsapp-secure-note">
              You will continue the conversation on WhatsApp.
            </p>
          </div>
        </div>
      )}

      <button
        className={`whatsapp-floating-button ${isOpen ? "is-open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close WhatsApp chat" : "Open WhatsApp chat"}
        aria-expanded={isOpen}
      >
        {isOpen ? <IoClose /> : <FaWhatsapp />}

        {!isOpen && (
          <span className="whatsapp-floating-label">
            Chat with us
          </span>
        )}
      </button>

    </div>
  );
}

export default WhatsAppFloatingButton;

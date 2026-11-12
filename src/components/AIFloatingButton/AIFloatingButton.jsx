
import { useEffect, useRef, useState } from "react";
import {
  MessageCircle,
  X,
  Send,
  Sparkles,
  CalendarDays,
  MapPin,
  Clock,
  MessageSquare,
  RotateCcw,
} from "lucide-react";

import "./AIFloatingButton.css";

const suggestions = [
  {
    icon: CalendarDays,
    text: "How can I book an appointment?",
  },
  {
    icon: Sparkles,
    text: "What dental services do you offer?",
  },
  {
    icon: MapPin,
    text: "Where is your clinic located?",
  },
  {
    icon: Clock,
    text: "What are your clinic timings?",
  },
];

const phoneNumber = "917483456238";

const getBotResponse = (question) => {
  const text = question.toLowerCase();

  if (
    text.includes("appointment") ||
    text.includes("book") ||
    text.includes("booking")
  ) {
    return {
      text: "We would be happy to help you book a dental appointment. You can contact our clinic directly through WhatsApp and our team will assist you with the available slots.",
      whatsapp: true,
    };
  }

  if (
    text.includes("service") ||
    text.includes("treatment") ||
    text.includes("dental")
  ) {
    return {
      text: "Smile & Glow Vasan offers dental care and treatment services. Please contact our clinic to know more about the treatments available and which option may suit your needs.",
      whatsapp: false,
    };
  }

  if (
    text.includes("location") ||
    text.includes("address") ||
    text.includes("where") ||
    text.includes("clinic")
  ) {
    return {
      text: "Thank you for your interest in Smile & Glow Vasan. Please contact our team on WhatsApp for the exact clinic address and directions.",
      whatsapp: true,
    };
  }

  if (
    text.includes("time") ||
    text.includes("timing") ||
    text.includes("open") ||
    text.includes("hours")
  ) {
    return {
      text: "Our team can help you with the latest clinic timings. Please message us on WhatsApp to confirm availability before visiting.",
      whatsapp: true,
    };
  }

  if (
    text.includes("price") ||
    text.includes("cost") ||
    text.includes("fee") ||
    text.includes("charge")
  ) {
    return {
      text: "Treatment costs depend on your dental requirements. Our team can guide you about consultation charges and treatment estimates.",
      whatsapp: true,
    };
  }

  if (
    text.includes("contact") ||
    text.includes("call") ||
    text.includes("phone")
  ) {
    return {
      text: "You can reach our clinic through WhatsApp. Send us your enquiry and our team will get back to you.",
      whatsapp: true,
    };
  }

  if (
    text.includes("pain") ||
    text.includes("toothache") ||
    text.includes("swelling")
  ) {
    return {
      text: "We are sorry you are experiencing discomfort. Please contact a dental professional for an assessment. If you have severe swelling, fever, or difficulty breathing or swallowing, seek urgent medical care.",
      whatsapp: true,
    };
  }

  if (
    text.includes("hello") ||
    text.includes("hi") ||
    text.includes("hey")
  ) {
    return {
      text: "Hello! Welcome to Smile & Glow Vasan. How can I help you with your dental care today?",
      whatsapp: false,
    };
  }

  return {
    text: "Thank you for reaching out to Smile & Glow Vasan. I can help with appointment enquiries, dental services, clinic information and contact details. You can also connect directly with our team through WhatsApp.",
    whatsapp: true,
  };
};

function AIFloatingButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const sendMessage = (text = message) => {
    const value = text.trim();

    if (!value || isTyping) return;

    const userMessage = {
      id: Date.now(),
      text: value,
      sender: "user",
    };

    setMessages((previous) => [...previous, userMessage]);
    setMessage("");
    setIsTyping(true);

    setTimeout(() => {
      const response = getBotResponse(value);

      setMessages((previous) => [
        ...previous,
        {
          id: Date.now() + 1,
          text: response.text,
          sender: "bot",
          whatsapp: response.whatsapp,
        },
      ]);

      setIsTyping(false);
    }, 800);
  };

  const openWhatsApp = () => {
    const whatsappMessage = encodeURIComponent(
      "Hello Smile & Glow Vasan Team, I would like to enquire about a dental appointment. Please contact me at your convenience. Thank you."
    );

    window.open(
      `https://wa.me/${phoneNumber}?text=${whatsappMessage}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const resetChat = () => {
    setMessages([]);
    setMessage("");
    setIsTyping(false);
  };

  return (
    <div className="ai-assistant">

      {isOpen && (
        <section
          className="ai-chat-window"
          aria-label="Smile & Glow Vasan dental assistant"
        >

          {/* Header */}

          <div className="ai-chat-header">
            <div className="ai-header-info">
              <span className="ai-avatar">
                <Sparkles size={21} />
              </span>

              <div className="ai-header-text">
                <h3>Smile & Glow Vasan Assistant</h3>

                <p>
                  <span className="ai-online-dot"></span>
                  Here to help you
                </p>
              </div>
            </div>

            <div className="ai-header-actions">
              <button
                type="button"
                className="ai-reset"
                onClick={resetChat}
                aria-label="Start a new conversation"
                title="New conversation"
              >
                <RotateCcw size={17} />
              </button>

              <button
                type="button"
                className="ai-close"
                aria-label="Close chat"
                onClick={() => setIsOpen(false)}
              >
                <X size={21} />
              </button>
            </div>
          </div>

          {/* Chat Body */}

          <div className="ai-chat-body">

            <div className="ai-chat-date">
              Welcome to Smile & Glow Vasan
            </div>

            {/* Welcome Message */}

            <div className="ai-message ai-message-bot">
              <span className="ai-message-icon">
                <Sparkles size={15} />
              </span>

              <div className="ai-message-content">
                <p>
                  Hello! Welcome to Smile & Glow Vasan. 👋
                </p>

                <p>
                  I am here to help you with appointments,
                  dental services and clinic information.
                </p>
              </div>
            </div>

            {/* Conversation */}

            {messages.map((item) => (
              <div
                key={item.id}
                className={`ai-message ${
                  item.sender === "user"
                    ? "ai-message-user"
                    : "ai-message-bot"
                }`}
              >
                {item.sender === "bot" && (
                  <span className="ai-message-icon">
                    <Sparkles size={15} />
                  </span>
                )}

                <div className="ai-message-content">
                  <p>{item.text}</p>

                  {item.whatsapp && (
                    <button
                      type="button"
                      className="ai-whatsapp-link"
                      onClick={openWhatsApp}
                    >
                      <MessageCircle size={16} />
                      Contact us on WhatsApp
                    </button>
                  )}
                </div>
              </div>
            ))}

            {/* Typing Indicator */}

            {isTyping && (
              <div className="ai-message ai-message-bot">
                <span className="ai-message-icon">
                  <Sparkles size={15} />
                </span>

                <div className="ai-typing">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}

            {/* Quick Suggestions */}

            {messages.length === 0 && (
              <div className="ai-suggestions">
                <p>How can I help you today?</p>

                {suggestions.map((suggestion) => {
                  const Icon = suggestion.icon;

                  return (
                    <button
                      type="button"
                      key={suggestion.text}
                      onClick={() => sendMessage(suggestion.text)}
                    >
                      <Icon size={16} />
                      {suggestion.text}
                    </button>
                  );
                })}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}

          <form
            className="ai-chat-form"
            onSubmit={(event) => {
              event.preventDefault();
              sendMessage();
            }}
          >
            <input
              ref={inputRef}
              type="text"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Ask us anything..."
              aria-label="Your message"
              disabled={isTyping}
            />

            <button
              type="submit"
              aria-label="Send message"
              disabled={!message.trim() || isTyping}
            >
              <Send size={18} />
            </button>
          </form>

          <div className="ai-chat-footer">
            <span>
              <Sparkles size={12} />
              Virtual dental assistant
            </span>
          </div>
        </section>
      )}

      {/* Floating Button */}

      <button
        type="button"
        className={`ai-floating-button ${
          isOpen ? "ai-button-open" : ""
        }`}
        aria-label={isOpen ? "Close assistant" : "Open assistant"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((previous) => !previous)}
      >
        {isOpen ? (
          <X size={25} />
        ) : (
          <>
            <MessageCircle size={25} />
            <span className="ai-button-label">Ask AI</span>
            <span className="ai-button-notification"></span>
          </>
        )}
      </button>

    </div>
  );
}

export default AIFloatingButton;

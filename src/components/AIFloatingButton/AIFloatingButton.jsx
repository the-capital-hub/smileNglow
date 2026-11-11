
import { useState } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import "./AIFloatingButton.css";

const suggestions = [
  "What dental services do you offer?",
  "How can I book an appointment?",
  "Where is your nearest clinic?",
];

function AIFloatingButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = (text = message) => {
    const value = text.trim();

    if (!value) return;

    setMessages((previous) => [
      ...previous,
      { text: value, sender: "user" },
    ]);

    setMessage("");
  };

  return (
    <div className="ai-assistant">
      {isOpen && (
        <section
          className="ai-chat-window"
          aria-label="Smile N Glow AI assistant"
        >
          <div className="ai-chat-header">
            <div className="ai-header-info">
              <span className="ai-avatar">
                <Sparkles size={20} />
              </span>

              <div>
                <h3>Smile N Glow Vasan Assistant</h3>
                <p>Your dental care companion</p>
              </div>
            </div>

            <button
              type="button"
              className="ai-close"
              aria-label="Close chat"
              onClick={() => setIsOpen(false)}
            >
              <X size={20} />
            </button>
          </div>

          <div className="ai-chat-body">
            <div className="ai-message ai-message-bot">
              <span className="ai-message-icon">
                <Sparkles size={16} />
              </span>

              <div>
                <p>
                  Hello! Welcome to Smile N Glow. How can I help
                  you with your dental care today?
                </p>
              </div>
            </div>

            {messages.map((item, index) => (
              <div
                key={index}
                className={`ai-message ${
                  item.sender === "user"
                    ? "ai-message-user"
                    : "ai-message-bot"
                }`}
              >
                <p>{item.text}</p>
              </div>
            ))}

            {messages.length === 0 && (
              <div className="ai-suggestions">
                <p>How can I help you?</p>

                {suggestions.map((suggestion) => (
                  <button
                    type="button"
                    key={suggestion}
                    onClick={() => sendMessage(suggestion)}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
          </div>

          <form
            className="ai-chat-form"
            onSubmit={(event) => {
              event.preventDefault();
              sendMessage();
            }}
          >
            <input
              type="text"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Ask us anything..."
              aria-label="Your message"
            />

            <button
              type="submit"
              aria-label="Send message"
              disabled={!message.trim()}
            >
              <Send size={18} />
            </button>
          </form>

          <p className="ai-chat-disclaimer">
            AI assistant demo
          </p>
        </section>
      )}

      <button
        type="button"
        className={`ai-floating-button ${
          isOpen ? "ai-button-open" : ""
        }`}
        aria-label={isOpen ? "Close AI assistant" : "Open AI assistant"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={25} /> : <MessageCircle size={25} />}

        {!isOpen && (
          <span className="ai-button-label">Ask AI</span>
        )}
      </button>
    </div>
  );
}

export default AIFloatingButton;

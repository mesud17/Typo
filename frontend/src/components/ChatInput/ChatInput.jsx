import { useState } from "react";
import { ArrowUp } from "lucide-react";
import "./chatInput.css";

export default function ChatInput({ onSendMessage }) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!message.trim()) {
      return;
    }

    onSendMessage(message.trim());

    setMessage("");
  };

  return (
    <div className="chat-input-wrapper">
      <form
        className="chat-input-container"
        onSubmit={handleSubmit}
      >
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message Typo AI..."
          rows={1}
        />

        <button
          type="submit"
          className="send-button"
          disabled={!message.trim()}
          aria-label="Send message"
        >
          <ArrowUp size={17} />
        </button>
      </form>

      <p className="chat-input-disclaimer">
        Typo AI can make mistakes. Check important information.
      </p>
    </div>
  );
}
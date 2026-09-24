import UserMessage from "../UserMessage/UserMessage";
import AIMessage from "../AIMessage/AIMessage";

import "./chatWindow.css";

export default function ChatWindow({ messages }) {
  return (
    <section className="chat-window">
      <div className="messages-container">

        {messages.map((message) => {
          if (message.role === "user") {
            return (
              <UserMessage
                key={message.id}
                message={message.content}
              />
            );
          }

          if (message.role === "assistant") {
            return (
              <AIMessage
                key={message.id}
                message={message.content}
              />
            );
          }

          return null;
        })}

      </div>
    </section>
  );
}
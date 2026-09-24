import "./userMessage.css";

export default function UserMessage({ message }) {
  return (
    <div className="user-message">
      <div className="user-message-content">
        <div className="user-avatar">T</div>
        <p>{message}</p>
      </div>
    </div>
  );
}

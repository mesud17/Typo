import {
  Share2,
  Trash2,
  LogOut,
} from "lucide-react";

import "./chatHeader.css";

export default function ChatHeader() {
  return (
    <header className="chat-header">

      <div className="chat-header-actions">

        <button className="header-action">
          <Share2 size={15} />
          <span>Share</span>
        </button>

        <button className="header-action">
          <Trash2 size={15} />
          <span>Clear</span>
        </button>

        <button className="header-action logout">
          <LogOut size={15} />
        </button>

      </div>

    </header>
  );
}
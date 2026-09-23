import typo_logo from "../../assets/image/typo-logo.png";

import {
  Plus,
  Search,
  Settings,
  BookOpenText,
  MessageSquare,
  UserRound,
} from "lucide-react";

import "./sidebar.css";

export default function Sidebar() {
  const recentChats = [
    "Next.js 14 Streaming",
    "API Schema Design",
    "Auth Flow",
    "debuging code"
  ];

  return (
    <aside className="sidebar">
      {/* Sidebar Header */}
      <header className="sidebar-header">
        <div className="logo">
          <img src={typo_logo} alt="Typo AI logo" />
        </div>
        <div className="brand-info">
          <h2>Typo AI</h2>
          <p>Developer Workspace</p>
        </div>
      </header>

      {/* New Chat Button */}
      <button className="new-chat-btn">
        <Plus size={18} />
        <span>New Chat</span>
        <kbd>⌘K</kbd>
      </button>

      {/* Search Chats */}
      <button className="search-chats">
        <Search size={16} />
        <span>Search chats</span>
      </button>

      {/* Chat History */}
      <div className="chat-history">
        <p>Recent</p>
        <section className="chat-section">
          <nav className="chat-list">
            {recentChats.map((chat) => (
              <button
                className="chat-item"
                key={chat}
              >
                <MessageSquare size={15} />
                <span>{chat}</span>
              </button>
            ))}
          </nav>
        </section>
      </div> 

      {/* Sidebar Footer */}
      <footer className="sidebar-footer">
        <nav className="footer-navigation">
          <button className="footer-item">
            <Settings size={17} />
            <span>Settings</span>
          </button>

          <button className="footer-item">
            <BookOpenText size={17} />
            <span>Documentation</span>
          </button>
        </nav>

        {/* User Profile */}
        <div className="user-profile">
          <div className="avatar">
            <UserRound size={16} />
          </div>
          <div className="user-info">
            <span className="user-name">Test User</span>
            <span className="user-role">Free Developer</span>
          </div>
        </div>
      </footer>
    </aside>
  );
}
import React from "react";

export default function ChatBox({ sentMessages }) {
  return <div className="chat-box-container" placeholder="Send a message!">{sentMessages}</div>;
}

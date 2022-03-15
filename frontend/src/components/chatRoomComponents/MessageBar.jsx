import React, { useState } from "react";
import auth from "../authComponents/auth";

export default function MessageBar({ getMessages }) {
  const [message, setMessage] = useState("");

  const handleUserInput = (e) => {
    setMessage(e.target.value);
  };

  const resetInputField = () => {
    setMessage("");
  };

  const sendMessage = async () => {
    await fetch("http://localhost:5050/api/message/send-message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message,
        user: auth.currentUser(),
        profilePictureURL: "remove this",
      }),
    });
    getMessages();
    resetInputField();
  };

  return (
    <div className="message-bar">
        <input
          className="message-input"
          value={message}
          onChange={handleUserInput}
          placeholder="Enter message..."
          onKeyUp={e => {
            if(e.code === 'Enter'){
              if(e.target.value !== '') sendMessage()
            }
          }}
        />
    </div>
  );
}

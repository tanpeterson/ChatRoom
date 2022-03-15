import React from "react";

export default function Message({ message, user, profilePictureURL }) {
  return (
    <div className={`user-message`}>
      <div className="user-profile-picture">
        <img
          src={profilePictureURL}
          alt={`${user}'s profile.`}
          className="profile-picture"
        />
      </div>
      <div className="message-body">
        <div className="message-sender">{user}</div>
        <div className="message-text">{message}</div>
      </div>
    </div>
  );
}

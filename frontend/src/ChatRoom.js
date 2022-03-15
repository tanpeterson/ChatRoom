import React, { useEffect, useRef, useState } from "react";
import "./styles/App.css";
import Header from "./components/chatRoomComponents/Header";
import MessageBar from "./components/chatRoomComponents/MessageBar";
import Message from "./components/chatRoomComponents/Message";

export default function ChatRoom(props) {
  const [userMessages, setUserMessages] = useState([]);
  const [messageID, setMessageID] = useState({});
  const [time, setTime] = useState(Date.now());
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [userMessages]);

  // Sets an interval to check for new messages. Updates time state.
  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const getMessages = () => {
    fetch("http://localhost:5050/api/message/get-message")
      .then((result) => result.json())
      .then((messages) => {
        messages.message.forEach((post) => {
          updateMessageID(post);
        });
      });
  };

  // Gets messages from the server every time time state updates.
  useEffect(() => {
    getMessages();
  }, [time]);

  /**
   * Keeps track of posts by ID to avoid repeating the same message twice.
   */
  const updateMessageID = (post) => {
    if (
      (!messageID[post._id] || post._id === "new") &&
      post !== userMessages[userMessages.length - 1]
    ) {
      setUserMessages((prevMessages) => [...prevMessages, post]);
    }
    setMessageID((prevState) => ({
      ...prevState,
      [post._id]: true,
    }));
  };

  let sentMessages = [];

  // Formats the data from the server into a single message.
  userMessages.forEach((messages, key) => {
    let { message, user, profilePictureURL } = messages;
    if (
      message === undefined ||
      user === undefined ||
      profilePictureURL === undefined
    )
      return;
    sentMessages.push(
      <div className="cl" key={key + "o"}>
        <Message
          message={message}
          user={user}
          profilePictureURL={profilePictureURL}
          key={key + "messages"}
        />
      </div>
    );
  });

  return (
    <>
      <Header props={props} />
      <div className="chat-box-container">{sentMessages}<div ref={messagesEndRef}></div></div>
      <MessageBar getMessages={getMessages} />
    </>
  );
}

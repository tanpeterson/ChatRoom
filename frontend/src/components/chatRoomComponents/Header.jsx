import React from "react";
import auth from "../authComponents/auth";

export default function Header({ props }) {
  return (
    <div className="header-container">
      <div className="header-left">Chat Room</div>
      <div className="header-center">Welcome, {auth.currentUser()}</div>
      <div className="header-right">
        <button
          onClick={() =>
            auth.logout(() => {
              props.history.push("/");
            })
          }
        >
          Log Out
        </button>
      </div>
    </div>
  );
}

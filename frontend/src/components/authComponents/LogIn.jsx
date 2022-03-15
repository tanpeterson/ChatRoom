import React, { useState } from "react";
import auth from "./auth";

export default function LogIn({ props }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [fail, setFail] = useState(true)

  return (
    <>
      <div>
        <p>Username:</p>
        <input
          className="user-name-password"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div>
        <p>Password:</p>
        <input
          type="password"
          className="user-name-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyUp={e => {
            if(e.code === 'Enter'){
              auth.login(() => {props.history.push("/app");}, userName, password)
              setFail(false);
            }
          }}
        />
      </div>
      <h4>{fail ? '' : 'Invaild Username/password'}</h4>
      <button
        className="top-button"
        onClick={() => {
          auth.login(
            () => {
              props.history.push("/app");
            },
            userName,
            password
          );
          setFail(false);
        }}
      >
        Login
      </button>
    </>
  );
}

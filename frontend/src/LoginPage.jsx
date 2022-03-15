import React, { useState } from "react";
import LogIn from "./components/authComponents/LogIn";
import Register from "./components/authComponents/Register";

export default function LoginPage(props) {
  const [registerOrSignin, setRegisterOrSignin] = useState(true);
  return (
    <div className="login-container">
      <div className="login">
      { registerOrSignin ? 'Welcome!' : 'Register an account.'}
      {registerOrSignin ? (
        <>
          <LogIn props={props} />{" "}
          <div className="sign-up">
            <p>Need an account?</p>
            <button
              className="bottom-button"
              onClick={() => {
                setRegisterOrSignin(false);
              }}
            >
              {" "}
              Register
            </button>
          </div>
        </>
      ) : (
        <>
          <Register props={props} />{" "}
          <div className="sign-up">
            <p>Already have an account?</p>
            <button
              className="bottom-button"
              onClick={() => {
                setRegisterOrSignin(true);
              }}
            >
              {" "}
              Log In
            </button>
          </div>
        </>
      )}
      </div>
    </div>
  );
}

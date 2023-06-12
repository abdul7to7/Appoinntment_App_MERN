import React, { useState } from "react";
import Login from "../Components/Login";
import Register from "../Components/Register";

function Auth() {
  const [currentForm, setCurrentForm] = useState("login");

  const changeForm = (formName) => {
    setCurrentForm(formName);
  };
  return (
    <div>
      {currentForm === "login" ? (
        <Login onSwitchForm={changeForm} />
      ) : (
        <Register onSwitchForm={changeForm} />
      )}
    </div>
  );
}

export default Auth;

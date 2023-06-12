import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../Redux/feature/alertSlice";

function Register(props) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState(false);

  const dispatch = useDispatch();

  const createUser = async () => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "http://localhost:8080/api/v1/auth/register",
        { name: userName, email: email, password: password }
      );
      dispatch(hideLoading());
      alert("Registration Successful");
    } catch (err) {
      dispatch(hideLoading());
      alert(`Something went wrong:${err.response.data}`);
    }
  };

  return (
    <div>
      <div className="authcontainer">
        <div className="authform">
          <div className="authformItems">
            <p>Name</p>
            <input
              type="text"
              onChange={(e) => setUserName(e.target.value)}
            ></input>
          </div>
          <div className="authformItems">
            <p>Email Address</p>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="authformItems">
            <p>Password</p>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div className="authformItems">
            <button onClick={createUser}>Register</button>
            <p>
              if registered?{" "}
              <span onClick={() => props.onSwitchForm("login")}>Login</span>
            </p>
            {registerSuccess && <p> Register Success </p>}
          </div>
        </div>
        <hr />
        <div className="authterms">
          <p>
            By signing in or creating an account, you agree with our Terms &
            conditions and Privacy statement
          </p>
        </div>
        <hr />
        <div className="authcopyRight">
          <p>All rights reserved. </p>
          <p>Copyright (2006 - 2023) - Booking.com™</p>
        </div>
      </div>
    </div>
  );
}

export default Register;

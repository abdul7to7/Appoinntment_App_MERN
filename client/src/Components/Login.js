import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../Redux/feature/alertSlice";

function Login(props) {
  const [email, setEmail] = useState("admin@admin.com");
  const [password, setPassword] = useState("admin");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      dispatch(showLoading());
      const res = await axios.post("http://localhost:8080/api/v1/auth/login", {
        email,
        password,
      });
      dispatch(hideLoading());
      //console.log(res.data);
      if (res.status === 200) {
        localStorage.setItem("token", res.data);
      }
      navigate("/");
    } catch (err) {
      dispatch(hideLoading());
      alert(`Something went wrong: ${err.response.data}`);
      console.log(err);
    }
  };
  return (
    <div>
      <div className="authcontainer">
        <div style={{ color: "red" }}>
          For Testing Purpose Credentials are given
        </div>
        <div className="authform">
          <div className="authformItems">
            <p>Email Address</p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="authformItems">
            <p>Password</p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div className="authformItems">
            <button onClick={handleLogin}>Login</button>
            <p>
              if not register?{" "}
              <span onClick={() => props.onSwitchForm("register")}>
                Register
              </span>
            </p>
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

export default Login;

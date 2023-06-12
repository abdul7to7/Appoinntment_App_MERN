import React from "react";
import "./Layout.css";
import { Siderbar } from "./Siderbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Layout = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  return (
    <div className="main">
      <div className="layout">
        <div className="sidebar">
          <div className="logo">
            <h6>Appointment App</h6>
            <hr />
          </div>
          <div className="menu">
            {" "}
            <Siderbar />
          </div>
        </div>
        <div className="content">
          <div className="header">
            <div className="headerContent">
              <Link to="/profile">
                <span>{user?.name}</span>
              </Link>
            </div>
          </div>
          <div className="body">{children}</div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import "./Sidebar.css";
import { Link, useNavigate } from "react-router-dom";

export const Siderbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/auth");
  };
  return (
    <div className="sidebarContainer">
      <div className="sidebarItem">
        <Link to="/">Home</Link>
      </div>
      <div className="sidebarItem">
        <Link to="/makeanappointment">Make An Appointment</Link>
      </div>
      <div className="sidebarItem">
        <Link to="/myappointments">My Appointments</Link>
      </div>
      <div className="sidebarItem">
        <Link to="/allappointments">All Appointments</Link>
      </div>
      <div className="sidebarItem">
        <Link to="/applydoctor">Apply Doctor</Link>
      </div>
      <div className="sidebarItem">
        <Link to="/doctors">Doctors</Link>
      </div>
      <div className="sidebarItem">
        <Link to="/userlist">Users</Link>
      </div>
      <div className="sidebarItem">
        <Link to="/profile">Profile</Link>
      </div>
      <div className="sidebarItem" onClick={handleLogout}>
        <Link>Logout</Link>
      </div>
    </div>
  );
};

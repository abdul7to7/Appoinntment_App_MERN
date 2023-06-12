import React, { useEffect, useState } from "react";
import { Layout } from "../Components/Layout";
import axios from "axios";
import "./Profile.css";

function Profile() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [isAdmin, setIsAdmin] = useState();
  async function getuserdata() {
    try {
      const res = await axios.get(
        "http://localhost:8080/api/v1/auth/getuserdata",
        {
          headers: {
            authorization: "bearer " + localStorage.getItem("token"),
          },
        }
      );
      setName(res.data.data.name);
      setEmail(res.data.data.email);
      setIsAdmin(res.data.data.isAdmin);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    getuserdata();
  }, []);
  return (
    <Layout>
      <div className="profileContainer">
        <div className="profileHeadingContainer">
          <h1 className="profileHeading"> Profile</h1>
        </div>
        <hr className="profileHr" />
        <div className="profileDetails">
          <div>Name: {name}</div>
          <div>Email: {email}</div>
          <div>isAdmin: {isAdmin ? "Yes" : "No"}</div>
        </div>
      </div>
    </Layout>
  );
}

export default Profile;

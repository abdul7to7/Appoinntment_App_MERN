import React from "react";
import { Layout } from "../Components/Layout";
import "./HomePage.css";

function HomePage() {
  return (
    <Layout>
      <div className="homeContainer">
        <div style={{ color: "red", fontSize: "18px" }}>
          All the features are available in test build. for Production build
          Limited features will be shown to Users/Doctors/Admin.
        </div>
        <div className="homeAbout">
          <span className="content">About This Site</span>
        </div>
      </div>
    </Layout>
  );
}

export default HomePage;

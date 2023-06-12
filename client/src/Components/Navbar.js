import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <>
      <div className="navbarContainer">
        <ul className="listItem">
          <li className="item">Item1</li>
          <li className="item">Item2</li>
          <li className="item">Item3</li>
          <li className="item">Item4</li>
        </ul>
        <div className="authItem">Login</div>
      </div>
    </>
  );
}
export default Navbar;

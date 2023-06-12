import React, { useState } from "react";

import { Layout } from "../Components/Layout";
import "./ApplyDoc.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { hideLoading, showLoading } from "../Redux/feature/alertSlice";
function ApplyDoc() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [address, setAddress] = useState("");
  const [experience, setExperience] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [fees, setFees] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const onSubmitHandler = async () => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "http://localhost:8080/api/v1/doc/apply-doctor",
        {
          userId: user._id,
          firstName: firstName,
          lastName: lastName,
          email: email,
          number: phoneNo,
          address: address,
          experience: experience,
          specialization: specialization,
          feesPerConsultation: fees,
          timings: { startTime, endTime },
        },
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      navigate("/");
    } catch (e) {
      dispatch(hideLoading());
      console.log(`{e} -->error from onSubmitHandler`);
    }
  };
  return (
    <Layout>
      <div className="mainBody">
        <div className="docapplycontainer">
          <div className="docformItems">
            <h1>Personal Details</h1>
          </div>
          <div className="formPersonal">
            <div className="docformItems">
              <p>First Name</p>
              <input
                className="formInputs"
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
              ></input>
            </div>
            <div className="docformItems">
              <p>Last Name</p>
              <input
                className="formInputs"
                type="text"
                onChange={(e) => setLastName(e.target.value)}
              ></input>
            </div>
            <div className="docformItems">
              <p>Email Address</p>
              <input
                className="formInputs"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className="docformItems">
              <p>Phone no.</p>
              <input
                className="formInputs"
                type="number"
                onChange={(e) => setPhoneNo(e.target.value)}
              ></input>
            </div>
            <div className="docformItems">
              <p>Address</p>
              <input
                className="formInputs"
                type="text"
                onChange={(e) => setAddress(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="docformItems">
            <h1>Professional Details</h1>
          </div>
          <div className="formProfessional">
            <div className="docformItems">
              <p>Specialization</p>
              <input
                className="formInputs"
                type="text"
                onChange={(e) => setSpecialization(e.target.value)}
              ></input>
            </div>
            <div className="docformItems">
              <p>Experience</p>
              <input
                className="formInputs"
                min="0"
                type="number"
                onChange={(e) => setExperience(e.target.value)}
              ></input>
            </div>
            <div className="docformItems">
              <p>Fess per Consultation</p>
              <input
                className="formInputs"
                min="0"
                type="number"
                onChange={(e) => setFees(e.target.value)}
              ></input>
            </div>
            <div className="docformItems">
              <p>From</p>
              <input
                className="formInputs timings"
                type="time"
                onChange={(e) => setStartTime(e.target.value)}
              />
            </div>
            <div className="docformItems">
              <p>To</p>
              <input
                className="formInputs timings"
                type="time"
                onChange={(e) => setEndTime(e.target.value)}
              />
            </div>
          </div>
          <div className="docformItems ">
            <button className="submitbtn" onClick={onSubmitHandler}>
              Submit
            </button>
            {
              //registerSuccess && <p> Register Success </p>}
            }
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ApplyDoc;

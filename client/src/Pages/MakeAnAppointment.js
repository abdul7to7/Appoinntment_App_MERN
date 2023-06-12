import React, { useEffect, useState } from "react";
import { Layout } from "../Components/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./MakeAnAppointment.css";

function MakeAnAppointment() {
  const [allDocs, setAllDocs] = useState();
  const [currentDoc, setCurrentDoc] = useState([]);

  const [uname, setuName] = useState("");
  const [unumber, setuNumber] = useState(91);
  const [uemail, setuEmail] = useState("");
  const [uaddress, setuAddress] = useState("");
  const [ustartTime, setuStartTime] = useState({});
  const [uendTime, setuEndTime] = useState({});

  const navigate = useNavigate();

  const onApply = async (e) => {
    //e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/appointment/makeanappointment",
        {
          doctorId: currentDoc[0],
          doctorName: currentDoc[1] + " " + currentDoc[2],
          doctorEmail: currentDoc[3],
          email: uemail,
          number: unumber,
          name: uname,
          address: uaddress,
          timings: { startTime: ustartTime, endTime: uendTime },
        },
        {
          headers: {
            authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      console.log("success");
      navigate("/myappointments");
    } catch (e) {
      console.log(e);
    }
  };
  const getalldocs = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8080/api/v1/doc/getalldocs"
      );
      //console.log(res.data);
      setAllDocs(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const onChangeSelect = (event) => {
    setCurrentDoc([...event.target.value.split(" ")]);
  };

  useEffect(() => {
    getalldocs();
  }, []);

  return (
    <Layout>
      <div className="mainContainer">
        <div className="makecontainer">
          <h1>Make An Appoinment</h1>
          <div className="spanitems">
            {" "}
            <div>Select Doctor</div>
            <select className="formInputs" onChange={onChangeSelect}>
              <option value="Select Doctor"></option>
              {allDocs?.map((doc) => (
                <option
                  key={doc._id}
                  value={
                    doc._id +
                    " " +
                    doc.firstName +
                    " " +
                    doc.lastName +
                    " " +
                    doc.email
                  }
                >
                  {doc?.firstName} {doc?.lastName} --- {doc?.email}
                </option>
              ))}
            </select>
          </div>
          <div className="spanitems">
            {" "}
            <div>From</div>
            <div>
              {" "}
              <input
                className="formInputs"
                type="time"
                onChange={(e) => setuStartTime(e.target.value)}
              />
            </div>
          </div>
          <div className="spanitems">
            {" "}
            <div>To</div>
            <div>
              {" "}
              <input
                className="formInputs"
                type="time"
                onChange={(e) => setuEndTime(e.target.value)}
              />
            </div>
          </div>
          <div className="spanitems">
            {" "}
            <div>Enter name</div>
            <div>
              {" "}
              <input
                className="formInputs"
                value={uname}
                onChange={(e) => setuName(e.target.value)}
              />
            </div>
          </div>
          <div className="spanitems">
            {" "}
            <div>Enter number</div>
            <div>
              {" "}
              <input
                className="formInputs"
                value={unumber}
                onChange={(e) => setuNumber(e.target.value)}
              />
            </div>
          </div>
          <div className="spanitems">
            {" "}
            <div>Enter email</div>
            <div>
              {" "}
              <input
                className="formInputs"
                value={uemail}
                onChange={(e) => setuEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="spanitems">
            {" "}
            <div>Enter address</div>
            <div>
              {" "}
              <input
                className="formInputs"
                value={uaddress}
                onChange={(e) => setuAddress(e.target.value)}
              />
            </div>
          </div>
          <div className="btncontainer">
            <button className="makebtn" onClick={onApply}>
              Apply
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default MakeAnAppointment;

import React, { useEffect, useState } from "react";
import "./MyAppointments.css";
import { Layout } from "../Components/Layout";
import axios from "axios";

function MyAppointments() {
  const [appointments, setAppointments] = useState();

  const getmyappointments = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8080/api/v1/appointment/getmyappointments",
        {
          headers: {
            authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      console.log(res.data);
      setAppointments(res.data);
    } catch (e) {}
  };
  useEffect(() => {
    getmyappointments();
  }, []);
  return (
    <Layout>
      <div className="myAppoContainer">
        <div className="myAppoHeadingContainer">
          <h1 className="myAppoHeading">MyAppointments</h1>
        </div>

        <div className="myAppoList">
          <div className="myAppoListHeader">
            <div className="appoSr">Sr no.</div>
            <div className="myAppoListHeaderItem">Doctor Name</div>
            <div className="myAppoListHeaderItem">Patient Name</div>
            <div className="myAppoListHeaderItem">Start Time</div>
            <div className="myAppoListHeaderItem">End Time</div>
          </div>
          <hr className="myAppoHr" />
          {appointments?.map((appointment, index) => (
            <div className="myAppoListItems" key={appointment?._id}>
              <div className="appoSr">{index + 1}</div>
              <div className="myAppoListItem">{appointment?.doctorName}</div>

              <div className="myAppoListItem">{appointment?.name}</div>
              <div className="myAppoListItem">
                {appointment?.timings.startTime}
              </div>
              <div className="myAppoListItem">
                {appointment?.timings.endTime}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default MyAppointments;

import React, { useEffect, useState } from "react";
import { Layout } from "../Components/Layout";
import axios from "axios";
import "./MyAppointments.css";

function AllApointments() {
  const [data, setData] = useState();
  const getallappointments = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8080/api/v1/appointment/getallappointments"
      );
      setData(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const onDeleteHandler = async (e) => {
    try {
      await axios.delete("http://localhost:8080/api/v1/appointment/delete", {
        headers: {
          _id: e.target.value,
        },
      });
      console.log("deleted successfully");
      getallappointments();
    } catch (e) {
      console.log("error from ondeleteHandler");
    }
  };
  useEffect(() => {
    getallappointments();
  }, []);
  return (
    <Layout>
      <div className="myAppoContainer">
        <div className="myAppoHeadingContainer">
          <h1 className="myAppoHeading">All Appointments</h1>
        </div>

        <div className="myAppoList">
          <div className="myAppoListHeader">
            <div className="appoSr">Sr no.</div>
            <div className="myAppoListHeaderItem">Doctor Name</div>
            <div className="myAppoListHeaderItem">Patient Name</div>
            <div className="myAppoListHeaderItem">Start Time</div>
            <div className="myAppoListHeaderItem">End Time</div>
            <div className="myAppoListHeaderItem">Action</div>
          </div>
          <hr className="myAppoHr" />
          {data?.map((i, index) => (
            <div className="myAppoListItems" key={i._id}>
              <div className="appoSr">{index + 1}</div>
              <div className="myAppoListItem">Dr. {i?.doctorName}</div>
              <div className="myAppoListItem">{i?.name}</div>
              <div className="myAppoListItem">{i?.timings.startTime}</div>
              <div className="myAppoListItem">{i?.timings.endTime}</div>

              <div className="myAppoListItem">
                <button
                  className="myAppoBtn"
                  value={i._id}
                  onClick={onDeleteHandler}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default AllApointments;

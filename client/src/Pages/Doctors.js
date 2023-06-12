import React, { useEffect, useState } from "react";
import { Layout } from "../Components/Layout";
import axios from "axios";
import "./MyAppointments.css";

function Doctors() {
  const [docs, setDocs] = useState([]);
  //const [docId, setDocId] = useState("");

  const approveHandler = async (event) => {
    //setDocId(event.target.value);
    //console.log(event.target.value);
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/doc/approvedoc",
        {
          docId: event.target.value,
        }
      );
      //console.log(docId, "yupp");
      //setDocId("");
      getalldocsfn();
    } catch (e) {
      console.log(e);
    }
  };

  const deleteHandler = async (event) => {
    //setDocId(event.target.value);
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/doc/deletedoc",
        {
          docId: event.target.value,
        }
      );
      getalldocsfn();
      //setDocId("");
    } catch (e) {
      console.log(e);
    }
  };

  async function getalldocsfn() {
    try {
      const res = await axios.get(
        "http://localhost:8080/api/v1/doc/getalldocs"
      );
      setDocs(res.data);
      //console.log(res.data);
    } catch (e) {
      console.log(`${e} -->error from getalldocfn`);
    }
  }
  useEffect(() => {
    getalldocsfn();
  }, []);
  //useEffect(() => {}, [docId]);

  return (
    <Layout>
      <div className="myAppoContainer">
        <div className="myAppoHeadingContainer">
          <h1 className="myAppoHeading">All Doctors</h1>
        </div>
        <div className="myAppoList">
          <div className="myAppoListHeader">
            <div className="appoSr">Sr no.</div>
            <div className="myAppoListHeaderItem">Name</div>
            <div className="myAppoListHeaderItem">Email</div>
            <div className="myAppoListHeaderItem">Phone no</div>
            <div className="myAppoListHeaderItem">Status</div>
            <div className="myAppoListHeaderItem">Action</div>
          </div>
          <hr className="myAppoHr" />
          {docs.map((doc, index) => {
            return (
              <div className="myAppoListItems" key={doc._id}>
                <div className="appoSr">{index + 1}</div>
                <div className="myAppoListItem">{doc.firstName}</div>
                <div className="myAppoListItem">{doc.email}</div>
                <div className="myAppoListItem">{doc.number}</div>
                <div className="myAppoListItem">
                  {doc.isApproved ? "Approved" : "Pending"}
                </div>
                <div className="myAppoListItem myAppoBtnListContainer">
                  <div className="myAppoBtnList">
                    <div>
                      {!doc.isApproved && (
                        <button value={doc._id} onClick={approveHandler}>
                          Approve
                        </button>
                      )}
                    </div>
                    <div>
                      <button value={doc._id} onClick={deleteHandler}>
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export default Doctors;

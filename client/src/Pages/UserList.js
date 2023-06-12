import React, { useEffect, useState } from "react";
import { Layout } from "../Components/Layout";
import axios from "axios";
import "./UserList.css";

function UserList() {
  const [users, setUsers] = useState([]);

  async function getallusersfn() {
    try {
      const res = await axios.get(
        "http://localhost:8080/api/v1/auth/getallusers"
      );
      setUsers(res.data);
      //console.log(res.data);
    } catch (e) {
      console.log(`${e} -->error from getalluserfn`);
    }
  }
  useEffect(() => {
    getallusersfn();
  }, []);
  return (
    <Layout>
      <div class="userListContainer">
        <div className="userListHeader">
          <h1 className="userListHeaderTitle">All Users</h1>
        </div>
        <div className="userListHeadings">
          <div className="userSr">Sr no</div>
          <div className="userListHeading">Name</div>
          <div className="userListHeading">Email</div>
        </div>
        <hr className="userListHr" />
        <div className="userListItemsContainer">
          {users.map((user, index) => {
            return (
              <div className="userListItems" key={user._id}>
                <div className="userSr">{index + 1}</div>
                <div className="userListItem">{user.name}</div>
                <div className="userListItem">{user.email}</div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export default UserList;

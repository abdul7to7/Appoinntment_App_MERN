import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { hideLoading, showLoading } from "../Redux/feature/alertSlice";
import axios from "axios";
import { setUser } from "../Redux/feature/userSlice";
function ProtectedRoute({ children }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  //get user
  const getUser = async () => {
    try {
      dispatch(showLoading());
      const res = await axios.get(
        "http://localhost:8080/api/v1/auth/getUserData",
        {
          headers: {
            authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      dispatch(hideLoading());

      if (res.data.success) {
        dispatch(setUser(res.data.data));
      } else {
        <Navigate to="/login" />;
        localStorage.clear();
      }
    } catch (e) {
      dispatch(hideLoading());
      localStorage.clear();
      console.log(e);
    }
  };
  useEffect(() => {
    if (!user) getUser();
  }, []);

  if (localStorage.getItem("token")) return children;
  else return <Navigate to="/auth" />;
}

export default ProtectedRoute;

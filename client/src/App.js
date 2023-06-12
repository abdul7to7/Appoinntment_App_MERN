import { useSelector } from "react-redux";
import "./App.css";
import Auth from "./Pages/Auth";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Spinner from "./Components/Spinner";
import ProtectedRoute from "./Components/ProtectedRoute";
import PublicRoute from "./Components/PublicRoute";
import ApplyDoc from "./Pages/ApplyDoc";
import Doctors from "./Pages/Doctors";
import UserList from "./Pages/UserList";
import Profile from "./Pages/Profile";
import Appointments from "./Pages/MyAppointments";
import MakeAnAppointment from "./Pages/MakeAnAppointment";
import AllApointments from "./Pages/AllApointments";

function App() {
  const { loading } = useSelector((state) => state.alerts);
  //console.log(loading);
  return (
    <>
      <BrowserRouter>
        {loading ? (
          <Spinner />
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/auth"
              element={
                <PublicRoute>
                  <Auth />
                </PublicRoute>
              }
            />
            <Route
              path="/applydoctor"
              element={
                <ProtectedRoute>
                  <ApplyDoc />
                </ProtectedRoute>
              }
            />
            <Route
              path="/doctors"
              element={
                <ProtectedRoute>
                  <Doctors />
                </ProtectedRoute>
              }
            />
            <Route
              path="/userlist"
              element={
                <ProtectedRoute>
                  <UserList />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/myappointments"
              element={
                <ProtectedRoute>
                  <Appointments />
                </ProtectedRoute>
              }
            />
            <Route
              path="/allappointments"
              element={
                <ProtectedRoute>
                  <AllApointments />
                </ProtectedRoute>
              }
            />
            <Route
              path="/makeanappointment"
              element={
                <ProtectedRoute>
                  <MakeAnAppointment />
                </ProtectedRoute>
              }
            />
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;

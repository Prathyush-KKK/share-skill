import { React, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import { ToastContainer } from "react-toastify";
import Ask from "./pages/Ask";
import DooDoo from "./pages/Do";
import Profile from "./pages/Profile";
import SignUp from "./components/login/SignUp";
import Login from "./components/login/Login";
import 'react-toastify/dist/ReactToastify.css';
import AuthenticationPage from "./pages/Authentication";
import PrivateRoute from "./auth/PrivateRoute";
import { AuthContext } from "./auth/AuthProvider";

export default function App() {
  const { user } = useContext(AuthContext);
console.log(user);
  // Check if user is logged in
  const isLoggedIn = user !== null;
  return (
    <>
          <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="ask" element={<Ask /> } />
          <Route path="do" element={<DooDoo />} />
          <Route path="auth" element={<AuthenticationPage />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

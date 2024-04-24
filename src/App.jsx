import {React, useEffect} from "react";
import { BrowserRouter, Routes, Route, createBrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing";
import Ask from "./pages/Ask";
import DooDoo from "./pages/Do";
import Profile from "./pages/Profile";
import SignUp from "./components/login/SignUp";
import Login from "./components/login/Login";
import 'react-toastify/dist/ReactToastify.css';
import AuthenticationPage from "./pages/Authentication";
// import Header from "./components/sections/Header";

export default function App() {


  

  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* </Route> */}
        <Route path="login" element={<Login/>}></Route>
        <Route path="signup" element={<SignUp/>}></Route>
        <Route path="ask"  element={
         <Ask />
        } />
        
        <Route path="details"  element={
            <DooDoo />
        } />
        <Route path="do"  element={
            <DooDoo />
        } />
        <Route path="auth"  element={
            <AuthenticationPage />
        } />
        <Route path="profile" element={<Profile/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}
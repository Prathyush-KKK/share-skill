import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Ask from "./pages/Ask";
import DooDoo from "./pages/Do";
import Profile from "./pages/Profile";


export default function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* </Route> */}
        <Route path="ask" element={<Ask/>} />
        <Route path="do" element={<DooDoo/>} />
        <Route path="profile" element={<Profile/>} />

      </Routes>
    </BrowserRouter>
  );
}
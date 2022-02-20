import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Nav/Navbar";
import { Signup } from "./Components/SignUp/SignUp.js";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/SignUp" element={<Signup />}></Route>
      </Routes>
    </div>
  );
}

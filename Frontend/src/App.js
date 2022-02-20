import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Nav/Navbar";
import SignIn from "./Components/SignIn/SignIn";
import { Signup } from "./Components/SignUp/SignUp.js";
import "./App.css";

export default function App() {
  return (
    <div className="App ">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/SignUp" element={<Signup />}></Route>
          <Route path="/SignIn" element={<SignIn />}></Route>
        </Routes>
      </div>
    </div>
  );
}

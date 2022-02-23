import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import SignIn from "./Components/SignIn/SignIn";
import { Signup } from "./Components/SignUp/SignUp.js";
import "./App.css";

import AdminDashboard from "./Components/AdminDashboard/AdminDashboard";
import EditProfile from "./Components/EditProfile/EditProfile";
const App = () => {
  return (
    <div className="App ">
      {/* <Home /> */}
      {/* <Navbar /> */}

      {/* <div className="container"> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/SignUp" element={<Signup />}></Route>
        <Route path="/SignIn" element={<SignIn />}></Route>
        <Route path="/admin/:id" element={<AdminDashboard />}></Route>
        <Route path="/editProfile" element={<EditProfile />}></Route>
      </Routes>
      {/* </div> */}
    </div>
  );
};

export default App;

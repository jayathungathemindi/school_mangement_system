import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import SignIn from "./Components/SignIn/SignIn";
import { SignUp } from "./Components/SignUp/SignUp.js";
import { EditProfile } from "./Components/EditProfile/EditProfile";
import "./App.css";

import AdminDashboard from "./Components/DashBoard/AdminDashboard/AdminDashboard";
import TeacherDashboard from "./Components/DashBoard/TeacherDashboard/TeacherDashboard";
import StudentDashboard from "./Components/DashBoard/StudentDashboard/StudentDashboard";
import Test from "./Components/Test/Test";

const App = () => {
  return (
    <div className="App ">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="/SignIn" element={<SignIn />}></Route>
        <Route path="/admin/:id" element={<AdminDashboard />}></Route>
        <Route path="/teacher/:id" element={<TeacherDashboard />}></Route>
        <Route path="/student/:id" element={<StudentDashboard />}></Route>
        <Route path="/editProfile/:id" element={<EditProfile />}></Route>
        <Route path="/test/:id" element={<Test />}></Route>
      </Routes>
    </div>
  );
};

export default App;

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
import { AddTeacher } from "./Components/AddTeacher/AddTeacher";
import { AddStudent } from "./Components/AddStudent/AddStudent";
import Navbar from "./Components/Nav/Navbar";
import Logout from "./Components/Logout/Logout";
import Test from "./Components/Test/Test";
import StudentList from "./Components/StudentList/StudentList";

const App = () => {
  return (
    <div className="App ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
        <Route path="/addTeacher" element={<AddTeacher />}></Route>
        <Route path="/addStudent" element={<AddStudent />}></Route>
        <Route path="/studentList" element={<StudentList />}></Route>

        <Route path="/SignIn" element={<SignIn />}></Route>
        <Route path="/admin" element={<AdminDashboard />}></Route>
        <Route path="/teacher" element={<TeacherDashboard />}></Route>
        <Route path="/student" element={<StudentDashboard />}></Route>
        <Route path="/editProfile/:id" element={<EditProfile />}></Route>

        <Route path="/test" element={<Test />}></Route>
      </Routes>
    </div>
  );
};

export default App;

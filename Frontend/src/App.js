import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Redirect } from "react-router";
import Home from "./Components/Home/Home";
import SignIn from "./Components/SignIn/SignIn";
import { SignUp } from "./Components/SignUp/SignUp.js";
import { EditProfile } from "./Components/EditProfile/EditProfile";
import axios from "axios";
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
import StudentListGrade from "./Components/StudentListGrade/StudentListGrade";
import TeacherList from "./Components/TeacherList/TeacherList";
import FileUpload from "./Components/FileUpload/FileUpload";
import AddQuestion from "./Components/QuizMaker/AddQuestion";
import QuizMaker from "./Components/QuizMaker/QuizMaker";
import Enrolement from "./Components/Enrolment/Enrolement";

const App = () => {
  const [isLog, SetLog] = useState("false");
  const [User, SetUser] = useState({
    role: "",
    id: "",
    user: {},
    enroll_Subject: [],
  });
  const [UserData, SetUserData] = useState("");
  useEffect(() => {
    if (localStorage.getItem("login") == "false") {
      SetLog({ ...isLog, login: localStorage.getItem("login") });
    } else {
      SetLog({ ...isLog, login: localStorage.getItem("login") });
    }
    axios
      .get(`http://localhost:3000/user/getById/${localStorage.getItem("id")}`)
      .then((res) => {
        const user = res.data.user;
        const userData = res.data.userData;
        // console.log(user);
        // console.log(userData);

        if (res.data.user.role == "Teacher") {
          SetUserData({ ...UserData, grade: userData.grades });
        }

        SetUser({
          ...User,
          role: user.role,
          id: user._id,
        });
      });
  }, []);
  // console.log(localStorage.getItem("logout"));
  if (localStorage.getItem("id") !== null) {
    localStorage.setItem("login", true);
  }

  return (
    <div className="App ">
      <Navbar isLog={isLog} UserData={UserData} User={User} />
      {/* {test(isLog)} */}

      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
        <Route path="/addTeacher" element={<AddTeacher />}></Route>
        <Route path="/addStudent" element={<AddStudent />}></Route>
        <Route path="/studentList" element={<StudentList />}></Route>

        <Route
          path="/studentList/:grade"
          element={<StudentListGrade />}
        ></Route>

        <Route path="/SignIn" element={<SignIn />}></Route>
        <Route path="/admin" element={<AdminDashboard />}></Route>
        <Route path="/teacher" element={<TeacherDashboard />}></Route>
        <Route path="/student" element={<StudentDashboard />}></Route>
        <Route path="/editProfile/:id" element={<EditProfile />}></Route>
        <Route path="/fileUpload/:grade" element={<FileUpload />}></Route>
        <Route path="/test" element={<Test />}></Route>
        <Route path="/teacherList" element={<TeacherList />}></Route>
        <Route path="/addQuiz/:grade" element={<AddQuestion />}></Route>
        <Route path="/quiz" element={<QuizMaker />}></Route>
        <Route path="/enroll" element={<Enrolement />}></Route>
      </Routes>
    </div>
  );
};

export default App;

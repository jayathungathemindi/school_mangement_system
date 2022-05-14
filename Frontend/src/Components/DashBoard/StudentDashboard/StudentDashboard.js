import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../../App.css";
import axios from "axios";
const StudentDashboard = React.memo(() => {
  const [User, SetUser] = useState({
    user: {},
    enroll_Subject: [],
  });

  useEffect(() => {
    axios
      .get(`http://localhost:3000/user/getById/${localStorage.getItem("id")}`)
      .then((res) => {
        const user = res.data.userData;
        SetUser({ ...User, user: user, enroll_Subject: user.Enroll_subjects });
      });
  }, []);
  // console.log(User);
  const Subject = [
    "Sinhala",
    "English",
    "Science",
    "Maths",
    "Commers",
    "History",
  ];

  const quiz = "quiz";
  const document = "document";
  return (
    <div>
      <div className="container">
        <h1>Student</h1>
        {Subject.map((subject) => {
          return (
            <div>
              <div class="card" style={{ width: "18rem" }}>
                <div class="card-body">
                  <h5 class="card-title">{subject}</h5>
                  <p class="card-text">Default Subject</p>
                  {/* <a href="#" class="btn btn-primary"></a> */}
                  <Link to={`/subjectView/${subject}`}>
                    <button className="btn btn-primary "> Click</button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
        {User.enroll_Subject.map((enroll_sub) => {
          return (
            <div>
              <div class="card" style={{ width: "18rem" }}>
                <div class="card-body">
                  <h5 class="card-title">{enroll_sub.subject}</h5>
                  <p class="card-text">Enrolled Subject</p>
                  {/* <a href="#" class="btn btn-primary">
                  
                  </a> */}

                  <Link to={`/subjectView/${enroll_sub.subject}`}>
                    <button className="btn btn-primary "> Click</button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}

        <div>
          <Link to={`/enroll`} className="menu-bars">
            <button className="btn btn-primary ">Enroll +</button>
          </Link>
        </div>
      </div>
    </div>
  );
});

export default StudentDashboard;

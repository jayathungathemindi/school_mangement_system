import React from "react";
import "./AdminDashboad.css";
import "../../../App.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const AdminDashboard = React.memo(() => {
  const [teacherCount, setTeacherCount] = useState(0);
  const [studentCount, setStudentCount] = useState(0);
  useEffect(() => {
    axios.get(`http://localhost:3000/user/getStudentCount`).then((res) => {
      console.log(res.data.count);
      setStudentCount(res.data.count);
    });

    axios.get(`http://localhost:3000/user/getTeacherCount`).then((res) => {
      console.log(res.data.count);
      setTeacherCount(res.data.count);
    });
  }, []);

  return (
    <>
      <img
        className="imghome1
"
        src="/image/—Pngtree—student book advertising background_970588.jpg"
        alt=""
        width="1551px"
        height="630px"
      />
      <div className="container">
        <div className="admindashboad">
          <div class="row">
            <div class="card1" style={{ width: "18rem", height: "8rem" }}>
              <p>
                {" "}
                <div class="card-header">Student Count</div>{" "}
              </p>
              {studentCount}
            </div>

            <div class="card1" style={{ width: "18rem", height: "8rem" }}>
              <p>
                {" "}
                <div class="card-header">Teacher Count</div>{" "}
              </p>
              {teacherCount}
            </div>
          </div>
        </div>
      </div>
    </> //  {teacherCount}
  );
});

export default AdminDashboard;

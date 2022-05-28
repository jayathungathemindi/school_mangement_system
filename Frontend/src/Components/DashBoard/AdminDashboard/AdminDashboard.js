import React from "react";
import "./AdminDashboad.css";

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
      <div className="AdminDashboad">
        <div className="admindashboad">
          <div class="card" style={{ width: "18rem" }}>
            <div class="card-header">Student Count</div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">{studentCount}</li>
            </ul>
          </div>

          <div class="card" style={{ width: "18rem" }}>
            <div class="card-header">Teacher Count</div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">{teacherCount}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
});

export default AdminDashboard;

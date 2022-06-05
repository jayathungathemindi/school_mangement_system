import React, { useState, useEffect } from "react";
import "./AdminDashboad.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useParams } from "react-router-dom";
import axios from "axios";

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
  const [value, onChange] = useState(new Date());
  return (
    <>
      <img
        className="imghome1
"
        src="/image/admindashboad.jpg"
        alt=""
        width="1535px"
        height="745px"
      />
      <div>
        <div className="admindashboad">
          <div className="row adminDetails ">
            <div className="col-sm-36">
              <img
                className="adminImage"
                src="/image/teacher1.jpg"
                width="160px"
                height="150px"
              />
              <div className="AdminDetail">
                {" "}
                <h5>Themindi Jayathunga</h5>
                <br />
                <h5>Birth Day : 1997-12-15</h5>
                <br />
                <h5>Email : themindi@gmail.com</h5>
                <br />
                <h5>Telephone Number : 0702276345</h5>
                <br />
              </div>
            </div>
          </div>

          <div class="row ">
            <div class="card1" style={{ width: "18rem", height: "8rem" }}>
              <p>
                {" "}
                <div class="card-header">Student Count</div>{" "}
              </p>
              {studentCount}
            </div>

            <div class="card2" style={{ width: "18rem", height: "8rem" }}>
              <p>
                {" "}
                <div class="card-header">Teacher Count</div>{" "}
              </p>
              {teacherCount}
            </div>
          </div>
          <div className="admincalneder">
            <Calendar onChange={onChange} value={value} />
          </div>
        </div>
      </div>
    </>
  );
});

export default AdminDashboard;

import React from "react";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import "./TeacherDashboad.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage,
} from "mdb-react-ui-kit";

import "../../../App.css";
import { useParams } from "react-router-dom";
import axios from "axios";
const TeacherDashboard = React.memo(() => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="teacherdashboad">
      <div className="cardT1">
        <Calendar onChange={onChange} value={value} />
      </div>
      <div className="cardT2">
        <img src="/image/login.png" alt="" width="450px" height="350px" />
      </div>
      <div className="cardT3">
        <img
          src="/image/Sixty-percent-blue-grey-and-white-pie-chart-on-transparent-background-PNG.png"
          alt=""
          width="250px"
          height="250px"
        />
      </div>
      <div className="prestange">
        <h3>Syllabus Cover</h3>
      </div>
      <div className="cardT4">
        <img
          src="/image/teacher-16073.png"
          alt=""
          width="250px"
          height="250px"
        />
      </div>
    </div>
  );
});

export default TeacherDashboard;

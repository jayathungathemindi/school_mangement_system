import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import "../../App.css";
import { useParams } from "react-router-dom";

function StudentListGrade() {
  const { grade } = useParams();
  const [User, SetUser] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3000/user/getByGrade/${grade}`).then((res) => {
      const users = res.data.users;
      const students = res.data.students;
      users.map((user) => {
        students.map((student) => {
          if (student.u_id == user._id) {
            SetUser((User) => [...User, { user: user, student: student }]);
          }
        });
      });
    });
  }, []);
  console.log(User);
  return (
    <div className="contrains">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>Gender</th>
            <th>Grade</th>
            <th>Name of Trustee</th>
            <th> Trust phone-number</th>
          </tr>

          {User.map((studentData) => {
            return (
              <tr>
                <td>{studentData.user.firstName}</td>
                <td>{studentData.user.lastName}</td>
                <td>{studentData.user.email}</td>

                <td>{studentData.user.address}</td>
                <td>{studentData.user.gender}</td>
                <td>{studentData.student.NameOfTrustee}</td>
                <td>{studentData.student.TP}</td>
              </tr>
            );
          })}
        </thead>
        <tbody></tbody>
      </Table>
    </div>
  );
}

export default StudentListGrade;

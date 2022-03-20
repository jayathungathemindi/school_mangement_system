import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import "./TeacherList.css";
function TeacherList() {
  const [User, SetUser] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/user/getTeacher`).then((res) => {
      console.log(res.data);
      const users = res.data.users;
      const teachers = res.data.teachers;

      users.map((user) => {
        teachers.map((teacher) => {
          if (teacher.u_id == user._id) {
            SetUser((User) => [...User, { user: user, teacher: teacher }]);
          }
        });
      });
      // SetUser({
      //   ...User,
      //   firstName: user.firstName,
      //   lastName: user.lastName,
      //   email: user.email,

      // });
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
            <th>Email</th>
            <th>Address</th>
            <th>Gender</th>
            <th>NIC</th>
            <th>phone-number</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {User.map((teacherData) => {
            return (
              <tr>
                <td>{teacherData.user.firstName}</td>
                <td>{teacherData.user.lastName}</td>
                <td>{teacherData.user.email}</td>

                <td>{teacherData.user.address}</td>
                <td>{teacherData.user.gender}</td>
                <td>{teacherData.teacher.NIC}</td>
                <td>089764346</td>

                <td>
                  {teacherData.teacher.grades.map((value) => {
                    return <label className="grade">{value.grade}</label>;
                  })}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default TeacherList;

import { useState,useEffect } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";

function TeacherList() {
  const [User, SetUser] = useState([{
    firstName: "",
    lastName: "",
    email: "",
    address:"",
    gender:""
    
  }]);
  useEffect(() => {
    axios.get(`http://localhost:3000/user/getTeacher`).then((res) => {
      console.log(res)
       const teachers = res.data.teachers;
teachers.map((teacher)=>{

SetUser({...User,firstName:teacher.firstName,lastName:teacher.lastName})

})
      // SetUser({
      //   ...User,
      //   firstName: user.firstName,
      //   lastName: user.lastName,
      //   email: user.email,
      
      // });
    });
  }, []);
  console.log(User)
  return (
    <div className="contrains">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Birthday</th>
            <th>Gender</th>
            <th>Address</th>
            <th>Grade</th>
            <th>NIC</th>
            <th>phone-number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default TeacherList;

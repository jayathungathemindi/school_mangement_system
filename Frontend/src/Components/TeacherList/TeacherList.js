import { useState,useEffect } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";

function TeacherList() {
  const [User, SetUser] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3000/user/getTeacher`).then((res) => {
    
       const teachers = res.data.teachers;
teachers.map((teacher)=>{

SetUser((User)=>[...User,teacher])

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
         
         {User.map((teacher)=>{
           return(

           <tr>
<td>{teacher.firstName}</td>
<td>{teacher.lastName}</td>
<td>{teacher.email}</td>

<td>{teacher.address}</td>
<td>{teacher.gender}</td>

           </tr>
           )
         })}
        </tbody>
      </Table>
    </div>
  );
}

export default TeacherList;

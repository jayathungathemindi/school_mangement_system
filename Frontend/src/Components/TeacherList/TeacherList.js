import React, { useEffect, useState } from "react";
import axios from "axios";


export const TeacherList =()=>{
const [User, SetUser] = useState({
  firstName: "",
  lastName: "",
  email: "",
  
});



useEffect(() => {
  axios.get(`http://localhost:3000/user/getByTeacher`).then((res) => {
    const user = res.data.user;

    SetUser({
      ...User,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    
    });
  });
}, []);

}
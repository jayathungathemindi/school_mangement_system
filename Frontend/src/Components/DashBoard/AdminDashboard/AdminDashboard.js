import React, { useEffect, useState } from "react";
import Navbar from "../../Nav/Navbar";
import "../../../App.css";
import { useParams } from "react-router-dom";
import axios from "axios";
function AdminDashboard() {
  const login = true;
  const [User, SetUser] = useState({
    role: "",
  });
  const { id } = useParams();

  console.log(id);
  useEffect(() => {
    axios.get(`http://localhost:3000/user/getById/${id}`).then((res) => {
      const user = res.data.user;
      SetUser({ ...User, role: user.role });
    });
  }, []);

  return (
    <div>
      <Navbar login={login} role={User.role} />
      <div className="container">
        <h1>Admin</h1>
      </div>
    </div>
  );
}

export default AdminDashboard;

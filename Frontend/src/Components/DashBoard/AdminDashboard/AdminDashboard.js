import React from "react";

import "../../../App.css";
import { useParams } from "react-router-dom";
import axios from "axios";
function AdminDashboard() {
  // const [User, SetUser] = useState({
  //   role: "",
  // });
  // const { id } = useParams();

  // console.log(id);
  // useEffect(() => {
  //   axios.get(`http://localhost:3000/user/getById/${id}`).then((res) => {
  //     const user = res.data.user;
  //     SetUser({ ...User, role: user.role });
  //   });
  // }, []);

  return (
    <div>
      <div className="container">
        <h1>Admin</h1>
      </div>
    </div>
  );
}

export default AdminDashboard;
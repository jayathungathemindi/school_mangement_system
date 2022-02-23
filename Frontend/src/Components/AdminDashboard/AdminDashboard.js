import React from "react";
import Navbar from "../Nav/Navbar";
import "../../App.css";
export default function AdminDashboard() {
  const login = true;
  return (
    <div>
      <Navbar login={login} />
      <div className="container">
        <h1>Admin</h1>
      </div>
    </div>
  );
}

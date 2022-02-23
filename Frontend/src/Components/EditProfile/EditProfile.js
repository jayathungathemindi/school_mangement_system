import React from "react";
import "../../App.css";
import Navbar from "../Nav/Navbar";
const login = true;
export default function () {
  return (
    <>
      <Navbar login={login} />
      <div className="container">
        <h1>Edit</h1>
      </div>
    </>
  );
}

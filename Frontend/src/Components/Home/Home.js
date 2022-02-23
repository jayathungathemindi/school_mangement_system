import React, { useState } from "react";
import Navbar from "../Nav/Navbar";
import "../../App.css";

function Home() {
  const login = false;
  return (
    <>
      <Navbar login={login} />
      <div className="container">
        <h1>Home</h1>
      </div>
    </>
  );
}

export default Home;

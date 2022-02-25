import React from "react";
import "./Home.css";
import Typed from "react-typed";
import Navbar from "../Nav/Navbar";
import "../../App.css";

const Home = () => {
  const login = false;
  return (
    <>
      <Navbar login={login} />
      <div className="Home">
        <div className="main-info">
          <h1>Online School Management System</h1>
          <Typed
            className="typed-text"
            strings={["Integrity,Honesty,Trust,Compassion"]}
            typeSpeed={40}
            backSpeed={60}
            loop
          />


          <h3>Themindi Hansani</h3>

          <img src="/image/login.png" alt=""  width="500px"
          height="400px" class="vert-move"  />



        </div>

        
 

        <img
          src="/image/book.jpg"
          alt=""
          width="1515px"
          height="650px"
        />
      </div>
    </>
  );
};

export default Home;


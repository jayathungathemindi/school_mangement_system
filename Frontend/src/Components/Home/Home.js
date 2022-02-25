import React from "react";
import "./Home.css";
import Typed from "react-typed";
import "../../App.css";

const Home = () => {
  return (
    <>
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
        </div>

        <img
          src="/image/pencils-g61821c5c4_1280.jpg"
          alt=""
          width="1535px"
          height="670px"
        />
      </div>
    </>
  );
};

export default Home;

// <img src="/image/schl.jpg" alt=""/>

/*
.tsparticles-canvas-el{
  position: absolute;
  height: 100vh;
  width: 100vw;
  z-index: 1;
}
*/

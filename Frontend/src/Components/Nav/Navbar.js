import React, { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import axios from "axios";
import { HomeOutlined } from "@ant-design/icons";

function Navbar() {
  const [isLog, SetLog] = useState("false");
  const [User, SetUser] = useState({
    role: "",
    id: "",
  });
  const [UserData, SetUserData] = useState("");

  useEffect(() => {
    console.log(localStorage.getItem("id"));
    axios
      .get(`http://localhost:3000/user/getById/${localStorage.getItem("id")}`)
      .then((res) => {
        const user = res.data.user;
        const userData = res.data.userData;
        // console.log(user);
        // console.log(userData);

        if (res.data.user.role == "Teacher") {
          SetUserData({ ...UserData, grade: userData.grades });
        }

        SetUser({ ...User, role: user.role, id: user._id });
      });

    if (localStorage.getItem("id") == null) {
      SetLog({ ...isLog, login: "false" });
    } else {
      SetLog({ ...isLog, login: localStorage.getItem("login") });
    }
  }, []);

  const Nav = () => {
    switch (isLog.login) {
      case "true": {
        return (
          <div>
            <Link to="/">
              {" "}
              <img
                src="/image/logo.png"
                alt=""
                width="90px"
                height="70px"
                class="homeIcon"
              />
            </Link>
            <IconContext.Provider value={{ color: "#fff" }}>
              <div className="navbar">
                <Link to={`/editProfile/${User.id}`} className="menu-bars">
                  <button className="nav-item ">Edit Profile</button>
                </Link>

                <Link to="/logout" className="menu-bars">
                  <button className="nav-item1 ">Logout</button>
                </Link>
              </div>
              <nav className="nav-menu active">
                <ul className="nav-menu-items">
                  {SidebarData.map((item, index) => {
                    switch (item.role) {
                      case User.role: {
                        if (
                          User.role == "Teacher" &&
                          item.title == "Dashboad"
                        ) {
                          return (
                            <>
                              {/* <li key={index} className="nav_teacher">
                                {item.icon}
                                <span>{item.title}</span>
                              </li> */}
                              <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                  {item.icon}
                                  <span>{item.title}</span>
                                </Link>
                              </li>

                              {UserData.grade.map((grade, _id) => {
                                if (item.title == "Dashboad") {
                                  return <></>;
                                }
                                return (
                                  <>
                                    <li key={index} className={item.cName}>
                                      <Link to={item.path + "/" + grade.grade}>
                                        <span>{grade.grade}</span>
                                      </Link>
                                    </li>
                                  </>
                                );
                              })}
                            </>
                          );
                        } else if (User.role == "Teacher") {
                          return (
                            <>
                              <li key={index} className="nav_teacher">
                                {item.icon}
                                <span>{item.title}</span>
                              </li>
                              {/* <li key={index} className={item.cName}>
                              <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                              </Link>
                            </li> */}
                              {UserData.grade.map((grade, _id) => {
                                return (
                                  <>
                                    <li key={index} className={item.cName}>
                                      <Link to={item.path + "/" + grade.grade}>
                                        <span>{grade.grade}</span>
                                      </Link>
                                    </li>
                                  </>
                                );
                              })}
                              ;
                            </>
                          );
                        } else {
                          return (
                            <li key={index} className={item.cName}>
                              <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                              </Link>
                            </li>
                          );
                        }
                      }
                    }
                  })}
                </ul>
              </nav>
            </IconContext.Provider>
          </div>
        );
      }

      case "false": {
        return (
          <div>
            {/* <IconContext.Provider value={{ color: "#fff" }}> */}
            <div className="navbar">
              <Link to="/">
                {" "}
                <img
                  src="/image/logo.png"
                  alt=""
                  width="90px"
                  height="70px"
                  class="homeIcon"
                />
              </Link>

              <Link to="/SignIn" className="menu-bars">
                <button className=" nav-item2  ">Sign In</button>
              </Link>
            </div>
            {/* </IconContext.Provider> */}
          </div>
        );
      }
    }

    // if ((isLog = "true")) {

    // } else {

    // }
  };

  return <>{Nav()}</>;
}

export default Navbar;

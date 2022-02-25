import React, { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import axios from "axios";

function Navbar() {
  const [isLog, SetLog] = useState("false");
  const [User, SetUser] = useState({
    role: "",
    id: "",
  });
  useEffect(() => {
    axios
      .get(`http://localhost:3000/user/getById/${localStorage.getItem("id")}`)
      .then((res) => {
        const user = res.data.user;
        SetUser({ ...User, role: user.role, id: user._id });
      });
    SetLog({ ...isLog, login: localStorage.getItem("login") });
  }, []);

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  console.log(isLog);
  const Nav = () => {
    switch (isLog.login) {
      case "true": {
        return (
          <div>
            <IconContext.Provider value={{ color: "#fff" }}>
              <div className="navbar">
                <Link to="#" className="menu-bars">
                  <FaIcons.FaBars onClick={showSidebar} />
                </Link>

                <Link to={`/editProfile/${User.id}`} className="menu-bars">
                  <button className="nav-item ">Edit Profile</button>
                </Link>

                <Link to="/logout" className="menu-bars">
                  <button className="nav-item1 ">Logout</button>
                </Link>
              </div>
              <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                  <li className="navbar-toggle">
                    <Link to="#" className="menu-bars">
                      <AiIcons.AiOutlineClose />
                    </Link>
                  </li>
                  {SidebarData.map((item, index) => {
                    switch (item.role) {
                      case User.role: {
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
                <AiIcons.AiFillHome className="home-icon"></AiIcons.AiFillHome>
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

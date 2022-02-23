import React, { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";

function Navbar(props) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const Nav = () => {
    if (props.login) {
      return (
        <div>
          <IconContext.Provider value={{ color: "#fff" }}>
            <div className="navbar">
              <Link to="#" className="menu-bars">
                <FaIcons.FaBars onClick={showSidebar} />
              </Link>

              <Link to="/editProfile" className="menu-bars">
                <button className="nav-item ">Edit Profile</button>
              </Link>
              <Link to="/" className="menu-bars">
                <button className="nav-item2 ">Logout</button>
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
                  return (
                    <li key={index} className={item.cName}>
                      <Link to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </IconContext.Provider>
        </div>
      );
    } else {
      return (
        <div>
          {/* <IconContext.Provider value={{ color: "#fff" }}> */}
          <div className="navbar">
            <Link to="/SignUp" className="menu-bars">
              <button className="nav-item ">SignUp</button>
            </Link>
            <Link to="/SignIn" className="menu-bars">
              <button className=" nav-item2  ">Sign In</button>
            </Link>
          </div>
          {/* </IconContext.Provider> */}
        </div>
      );
    }
  };

  return <>{Nav()}</>;
}

export default Navbar;

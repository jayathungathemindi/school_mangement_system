import React, { useEffect } from "react";

const Logout = () => {
  useEffect(() => {
    localStorage.setItem("id", null);
    localStorage.setItem("L_ID", -1);
    localStorage.setItem("login", false);
    localStorage.setItem("logout", true);
    window.location = `/`;
  }, []);

  return <div></div>;
};

export default Logout;

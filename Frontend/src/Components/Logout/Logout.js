import React, { useEffect } from "react";

export default function Logout() {
  useEffect(() => {
    localStorage.setItem("login", false);
    localStorage.setItem("logout", true);
    localStorage.setItem("id", null);
    localStorage.setItem("L_ID", -1);
    window.location = `/`;
  });

  return <div></div>;
}

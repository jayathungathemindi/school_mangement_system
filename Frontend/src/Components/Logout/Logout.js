import React, { useEffect } from "react";

export default function Logout() {
  useEffect(() => {
    localStorage.setItem("login", false);
    localStorage.setItem("id", "");
    window.location = `/`;
  });

  return <div></div>;
}

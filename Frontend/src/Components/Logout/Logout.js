import React, { useEffect } from "react";

export default function Logout() {
  useEffect(() => {
    localStorage.setItem("login", false);
    window.location = `/`;
  });

  return <div></div>;
}

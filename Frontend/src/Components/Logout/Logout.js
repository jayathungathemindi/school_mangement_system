import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function Logout() {
  const history = useHistory();
  useEffect(() => {
    //api
    history.push("/SignIn");
  });

  return <div>Logout</div>;
}

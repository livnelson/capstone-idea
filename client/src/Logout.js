import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Logout({ user, setIsLoggedIn }) {
  const navigate = useNavigate();

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    })
    console.log("User logged out")
    navigate("/");
    setIsLoggedIn(false);
  }

  return (
    <div className="logout">
      <Link
        to="/"
        onClick={handleLogout}
        className="logout-button"
      > Log Out
      </Link>
    </div>
  );
}

export default Logout;
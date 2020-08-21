import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Todo List App</h1>
      <Link style={{ color: "white" }} to="/">
        Home
      </Link>{" "}
      |{" "}
      <Link style={{ color: "white" }} to="/about">
        About
      </Link>
    </header>
  );
}

const headerStyle = {
  backgroundColor: "#022444",
  color: "white",
  textAlign: "center",
  padding: "10px",
  fontWeight: "bold",
};

export default Header;

import React from "react";
import logo from "./016.png";
const Logo = (props) => {
  return (
    <header>
      <h1>"Welcome to the {props.appName}"</h1>
      <img src={logo} alt="cool bird" />
    </header>
  );
};

export default Logo;

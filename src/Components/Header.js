import React from "react";
import '../Styles/Header.css'; 
import Logo from "../images/logo.jpg"

const Header = () => {
  let numberOfUsers = 24;
  return (
    <div id="overall">
      <div id="site">
       <img id="logo" src={Logo}></img>
       <h1 id="title">Twitter</h1>
      </div>
        <p className="tabs">Latest</p>
        <p className="tabs">Explore</p>
        <p className="tabs">Settings</p>
      <b id="total-users">Number of users: {numberOfUsers}</b>
    </div>
  );
};

export default Header;
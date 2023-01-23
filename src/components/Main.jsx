import React from "react";
import backgroundVideo from "../assets/BrisketCut.mp4";
import logo from "../assets/BAB - Transparent White.png";

const Main = () => {
  return (
    <div className="main">
      <div className="overlay"></div>

      <video src={backgroundVideo} autoPlay loop muted />

      <div className="content">
        <img src={logo} className="img" alt="logo"/>
        <p>About to set Northern Virginia ABLAZE!</p>
      </div>
    </div>
  );
};

export default Main;

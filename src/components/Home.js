import React from "react";
import Moonlight from "./Moonlight";

const Home = () => {
  return (
    <div className="home-component">
      <div className="home-container">
        <div className="home-page-text">
          <h3 className="home-page-title">Hello! My name is Andrea.</h3>
          <p className="home-page-paragraph" id="home-page-paragraph-1">
            I am a software engineer, architect and pianist, fascinated by the
            intersection between art and technology.
          </p>
          <p className="home-page-paragraph" id="home-page-paragraph-2">
            For each new work, I design a custom algorithm capable of generating
            a sequence of unique, but aesthetically related images.
          </p>
        </div>
        <Moonlight />
      </div>
    </div>
  );
};

export default Home;

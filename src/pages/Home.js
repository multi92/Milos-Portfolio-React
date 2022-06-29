import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import { Icon, IconButton } from "@material-ui/core";

export default function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My name is Milos Mijajlovic</h2>
        <div className="prompt">
          <p>Junior Developer with a passion for learning and creating</p>
          <IconButton onClick={() => window.open("https://www.linkedin.com/in/milos-mijajlovic-58809820b/")}>   <LinkedInIcon /></IconButton>
          <IconButton onClick={() => window.open("https://www.podinario.rs/")}><EmailIcon /></IconButton>
          <IconButton onClick={() => window.open("https://github.com/multi92")}><GithubIcon /></IconButton>
       
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-end</h2>
            <span>
              Html5(CANVAS), Javascript, Pixi.js, React, Css, Sass, Npm,
              Bootstrap, MaterialUi, Yarn, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-end</h2>
            <span>NodeJs, MySql, Php, Laravel, CakePhp</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My name is Milos Mijajlovic</h2>
        <div className="prompt">
          <p>Junior Developer with a passion for learning and creating</p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-end</h2>
            <span>
              HTML5(CANVAS), JAVASCRIPT, PIXI.JS, REACT, CASS, SASS, NPM,
              BOOTSTRAP, MATERIALUI, YARN, STYLEDCOMPONENTS
            </span>
          </li>
          <li className="item">
            <h2>Back-end</h2>
            <span>NODEJS, MYSQL, PHP, LARAVEL, CAKEPHP</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

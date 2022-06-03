// index.js
import React from "react";
import ReactDOM from "react-dom";
// To get the root element from the HTML document
import asabenehImage from "./images/asabeneh.jpg";
import cssLogo from "./images/css_logo.png";
import htmlLogo from "./images/html_logo.png";
import reactLogo from "./images/react_logo.png";
import { MdVerifiedUser } from "react-icons/md";
import { BiTime } from "react-icons/bi";

const nameAndPicture = (
  <div>
    <img
      src={asabenehImage}
      alt="Asabeneh Yetayeh"
      style={{
        borderRadius: "50%",
        padding: "10px",
        height: "400px",
        width: "400px",
      }}
    />
    <h1>Asabeneh Yetayeh</h1>
    <p style={{ display: "inline-block" }}>Senior Developer, Finland</p>
    <MdVerifiedUser
      fill="blue"
      style={{ paddingLeft: "5px", fontSize: "2em" }}
    />
  </div>
);

const skills = [
  "HTML",
  "CSS",
  "Sass",
  "Js",
  "Recact",
  "Reducx",
  "node",
  "MongoDB",
  "Python",
  "Flask",
  "Django",
  "NumPy",
  "Pandas",
  "Data",
  "Analysis",
  "MySQL",
  "GraphQL",
  "D3.js",
  "Gatsby",
  "Docker",
  "Heroku",
  "Git",
];

const skillsFormatted = skills.map((skill) => {
  return (
    <li
      style={{
        backgroundColor: "#40FF33",
        color: "white",
        paddingBlock: "5px",
        paddingInline: "10px",
        display: "inline-block",
        cursor: "pointer",
        borderRadius: "16px",
        margin: "5px",
      }}
    >
      {skill}
    </li>
  );
});

const skillsSection = (
  <div className="skillSection">
    <h1>Skills</h1>
    <ul>{skillsFormatted}</ul>
    <BiTime
      style={{
        fontSize: "30px",
        display: "inline-block",
        color: "grey",
        paddingInline: "5px",
      }}
    />
    <p style={{ display: "inline-block" }}>Joined on Aug 30, 2020</p>
  </div>
);

const userInfoTop = (
  <div style={{ paddingLeft: "10px" }}>
    {nameAndPicture}
    {skillsSection}
  </div>
);

const frontEndIconStyle = {
  height: "30%",
  width: "30%",
};

const frontEndLogos = (
  <div style={{ background: "#DCDCDC" }}>
    <h1 style={{ textAlign: "center" }}>Front End Technologies </h1>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        paddingInline: "20%",
      }}
    >
      <img style={frontEndIconStyle} src={cssLogo} alt="css logo" />
      <img style={frontEndIconStyle} src={htmlLogo} alt="html logo" />
      <img style={frontEndIconStyle} src={reactLogo} alt="react logo" />
    </div>
  </div>
);

const subscribeBox = (
  <div style={{ background: "#080808" }}>
    <div
      style={{
        background: "#03ff89",
        borderRadius: "50px",
        textAlign: "center",
        display: "block",
        paddingBlock: "2em",
      }}
    >
      <h2>Subscribe</h2>
      <b>Sign up with your email adress to subscribe </b>
      <div>
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </div>
      <button>Click here to subscribe</button>
    </div>
  </div>
);

// JSX element, app
const app = (
  <div className="app">
    {userInfoTop}
    {frontEndLogos}
    {subscribeBox}
  </div>
);

const rootElement = document.getElementById("root");
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement);

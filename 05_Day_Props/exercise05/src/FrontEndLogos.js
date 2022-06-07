import React from "react";
import cssLogo from "./images/techLogos/css_logo.png";
import htmlLogo from "./images/techLogos/html_logo.png";
import reactLogo from "./images/techLogos/react_logo.png";

export function FrontEndLogos() {
  const TechLogo = (props) => {
    const frontEndIconStyle = {
      height: "30%",
      width: "30%",
    };
    return <img style={frontEndIconStyle} src={props.src} alt={props.alt} />;
  };
  return (
    <div style={{ background: "#DCDCDC" }}>
      <h1 style={{ textAlign: "center" }}>Front End Technologies </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingInline: "20%",
          paddingBlock: "20px",
        }}
      >
        <TechLogo src={cssLogo} alt="css logo" />
        <TechLogo src={htmlLogo} alt="html logo" />
        <TechLogo src={reactLogo} alt="react logo" />
      </div>
    </div>
  );
}

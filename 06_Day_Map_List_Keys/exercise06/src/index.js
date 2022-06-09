import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { ColorGrid } from "./NumberSquare";
import { tenHighestPopulation as dataLines } from "./dataRows";

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

function DataLine(props) {
  return (
    <div style={{ display: "flex" }}>
      <p style={{ width: "100px" }}>{props.data.country}</p>
      <div
        style={{
          backgroundColor: "black",
          width: "1000px",
          marginBlock: "10px",
        }}
      >
        {console.log(
          scale(props.data.population, 126960000, 7693165599, 0, 1000)
        )}
        <div
          style={{
            width: scale(props.data.population, 126960000, 7693165599, 0, 1000),
            backgroundColor: "green",
          }}
        >
          a
        </div>
      </div>
      <p style={{ width: "100px" }}>{props.data.population}</p>
    </div>
  );
}

function Chart(props) {
  const visualizedDataLines = [];
  props.data.forEach((dataLine) => {
    visualizedDataLines.push(
      <DataLine key={dataLine.country} data={dataLine}></DataLine>
    );
  });
  return visualizedDataLines;
}

const App = () => {
  return (
    <div>
      <ColorGrid />
      <Chart data={dataLines} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

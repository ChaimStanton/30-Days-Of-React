import React from "react";
import isPrime from "isprime";

function NumberSquare(props) {
  let randNumber = Math.floor(Math.random() * 10) + 1;
  let color;
  if (isPrime(randNumber)) {
    color = "red";
  } else if (randNumber % 2 === 0) {
    color = "DarkOliveGreen";
  } else {
    color = "yellow";
  }
  return (
    <div
      style={{
        width: "100px",
        height: "50px",
        backgroundColor: color,
        display: "inline-block",
        marginInline: "10px",
        paddingInline: "5px",
      }}
    >
      <b style={{ color: "white" }}>{randNumber} </b>
    </div>
  );
}
function Row(props) {
  const listOfSquares = [];
  for (let i = 0; i < props.numberOfColumns; i++) {
    listOfSquares.push(<NumberSquare key={i} />);
  }
  return <div style={{ margin: "10px" }}>{listOfSquares}</div>;
}
export function ColorGrid() {
  const rows = [];
  for (let i = 0; i < 5; i++) {
    rows.push(<Row key={i} numberOfColumns="5" />);
  }
  return rows;
}

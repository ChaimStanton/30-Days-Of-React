function hexColorGenerator() {
  let str = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return "#" + color;
}

function ColorBar(props) {
  return (
    <div
      style={{
        height: "50px",
        width: "10000px",
        backgroundColor: props.backgroundColor,
      }}
    >
      {props.backgroundColor}
    </div>
  );
}

export function SelectionOfColors(props) {
  let list = [];
  for (let i = 0; i < props.number; i++) {
    list.push(<ColorBar backgroundColor={hexColorGenerator()} />);
  }
  return list;
}

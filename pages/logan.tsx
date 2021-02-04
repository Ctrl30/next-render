import React, { ReactElement, useState } from "react";

interface Props {}

export default function Logan({}: Props): ReactElement {
  const [color, setColor] = useState("blue");
  const handleClick = () => {
    setColor(color === "blue" ? "red" : "blue");
    console.log("fuck you");
  };
  return (
    <div>
      <h1>Logan</h1>
      <button onClick={handleClick}>click</button>
      <style jsx>
        {`
          h1 {
            color: ${color};
          }
        `}
      </style>
    </div>
  );
}

import React from "react";
import { useState } from "react";

const Square = ({ takeTurn, id }) => {
  const mark = ["O", "X", "✿"];
  const [filled, setFilled] = useState(false);
  const [tik, setTik] = useState(2);

  return (
    <button
      className={`square ${tik === 0 ? "red" : tik === 1 ? "white" : "flower"}`}
      onClick={() => {
        setTik(takeTurn(id));
        setFilled(true);
        console.log(`Square: ${id} filled by player : ${tik}`);
      }}
    >
      <h1>{mark[tik]}</h1>
    </button>
  );
};

export default Square;

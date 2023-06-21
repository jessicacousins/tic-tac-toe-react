import React from "react";
import Square from "./Square";
import { useState } from "react";
import { win, checkForWinner } from "./CheckForWinner";

const Board = () => {
  const [player, setPlayer] = useState(1);
  const [gameState, setGameState] = useState([]);

  let status = `Winner is: ${checkForWinner(gameState)}!`;

  let playerTurn = `Next Player: ${player == "0" ? "Player O" : "Player X"}`;

  console.log(`We have a WINNER! ${status}`);

  const takeTurn = (id) => {
    setGameState([...gameState, { id: id, player: player }]);
    setPlayer((player + 1) % 2);
    return player;
  };

  function renderSquare(i) {
    return <Square takeTurn={takeTurn} id={i}></Square>;
  }

  return (
    <div className="game-board">
      <div className="grid-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="grid-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="grid-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <div id="info">
        <h2 id="turn">{playerTurn}</h2>
        <h2 className="winnerinfo">{status}</h2>
      </div>
    </div>
  );
};

export default Board;

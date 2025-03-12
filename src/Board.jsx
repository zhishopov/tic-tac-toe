import { useState } from "react";
import Square from "./Square";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function clickHandler(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }

  return (
    <>
      <div className="board-row">
        <Square
          value={squares[0]}
          onSquareClick={() => clickHandler(0)}
        ></Square>
        <Square
          value={squares[1]}
          onSquareClick={() => clickHandler(1)}
        ></Square>
        <Square
          value={squares[2]}
          onSquareClick={() => clickHandler(2)}
        ></Square>
      </div>
      <div className="board-row">
        <Square
          value={squares[3]}
          onSquareClick={() => clickHandler(3)}
        ></Square>
        <Square
          value={squares[4]}
          onSquareClick={() => clickHandler(4)}
        ></Square>
        <Square
          value={squares[5]}
          onSquareClick={() => clickHandler(5)}
        ></Square>
      </div>
      <div className="board-row">
        <Square
          value={squares[6]}
          onSquareClick={() => clickHandler(6)}
        ></Square>
        <Square
          value={squares[7]}
          onSquareClick={() => clickHandler(7)}
        ></Square>
        <Square
          value={squares[8]}
          onSquareClick={() => clickHandler(8)}
        ></Square>
      </div>
    </>
  );
}

import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const [square, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    const nextSquares = squares.slice();

    nextSquares[i] = "X";

    setSquares(nextSquares);
  }

  return (
    <div className="board">
      <Square value={square[0]} onSquareClick={() => handleClick(0)} />
      <Square value={square[1]} />
      <Square value={square[2]} />
      <Square value={square[3]} />
      <Square value={square[4]} />
      <Square value={square[5]} />
      <Square value={square[6]} />
      <Square value={square[7]} />
      <Square value={square[8]} />
    </div>
  );
}

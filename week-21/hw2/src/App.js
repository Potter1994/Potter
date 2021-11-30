import React, { useState } from "react";
import "./App.css";

const Square = (props) => (
  <button className="square" onClick={props.onClick}>
    {props.value}
  </button>
);

const Board = (props) => {
  return (
    <>
      {!props.winner && (
        <div>{"Player: " + (props.chess ? "白子" : "黑子")}</div>
      )}
      {props.winner && (
        <>
          <div>{props.chess ? "白子" : "黑子"}贏了</div>
          <button onClick={props.resetGame}>再來一局</button>
        </>
      )}
      {props.squares.map((i, index) => (
        <div key={"row" + index} className="board-row">
          {i.map((j, jdex) => {
            return (
              <Square
                value={props.squares[index][jdex]}
                onClick={() => props.onClick(index, jdex)}
                key={`${index}${jdex}`}
              />
            );
          })}
        </div>
      ))}
    </>
  );
};

function App() {
  const [squares, setSquares] = useState(
    Array(19)
      .fill(null)
      .map((i) => Array(19).fill(null))
  );
  const [chess, setChess] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleClickChess = (i, j) => {
    const newSquares = squares.slice();
    if (newSquares[i][j] || winner) return console.log(winner);
    newSquares[i][j] = chess ? "○" : "●";
    setSquares(newSquares);
    calculateWinner(newSquares, i, j) ? setWinner(true) : setChess(!chess);
  };

  const resetGame = () => {
    setSquares(
      Array(19)
        .fill(null)
        .map((i) => Array(19).fill(null))
    );
    setChess(true);
    setWinner(null);
  };

  return (
    <div>
      <Board
        chess={chess}
        squares={squares}
        onClick={handleClickChess}
        winner={winner}
        resetGame={resetGame}
      />
    </div>
  );
}

function checkChess(boards, currentX, currentY, directionX, directionY) {
  let tempX = currentX;
  let tempY = currentY;
  const value = boards[currentX][currentY];
  let count = 0;
  while (count <= 4) {
    tempX += directionX;
    tempY += directionY;
    if (
      tempX < 0 ||
      tempX > 18 ||
      tempY < 0 ||
      tempY > 18 ||
      boards[tempX][tempY] !== value
    ) {
      break;
    }
    count++;
  }
  return count;
}

function calculateWinner(boards, currentX, currentY) {
  if (
    checkChess(boards, currentX, currentY, 0, 1) +
      checkChess(boards, currentX, currentY, 0, -1) >=
      4 ||
    checkChess(boards, currentX, currentY, 1, 0) +
      checkChess(boards, currentX, currentY, -1, 0) >=
      4 ||
    checkChess(boards, currentX, currentY, 1, 1) +
      checkChess(boards, currentX, currentY, -1, -1) >=
      4 ||
    checkChess(boards, currentX, currentY, 1, -1) +
      checkChess(boards, currentX, currentY, -1, 1) >=
      4
  )
    return true;
  return false;
}

export default App;

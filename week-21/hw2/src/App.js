import React, { useState } from "react";
import "./App.css";

// 創建正方形按鈕 Square
const Square = (props) => {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
};

// 創建19*19棋盤 Board (使用fill(null)來填值，再用map迴圈來建components)
const Board = (props) => {
  const boardArray = Array(19)
    .fill(null)
    .map((i, index) => (
      <div key={"row" + index} className="board-row">
        {Array(19)
          .fill(null)
          .map((j, jIndex) => (
            <Square
              value={props.value[index][jIndex]}
              key={jIndex}
              onClick={() => props.onClick(index, jIndex)}
            />
          ))}
      </div>
    ));
  return <>{boardArray}</>;
};

function App() {
  // 建立一個取19*19棋盤Board上的按鈕值Square
  const [board, setBoard] = useState({
    squares: Array(19)
      .fill(null)
      .map((i) => Array(19).fill(null)),
    xIsNext: true,
  });
  const [winner, setWinner] = useState(null);

  const handleClickChess = (i, j) => {
    const newBoard = board.squares.slice();
    if (newBoard[i][j] || winner) return;
    newBoard[i][j] = board.xIsNext ? "○" : "●";
    setBoard({ ...board, squares: newBoard, xIsNext: !board.xIsNext });
    if (checkWinner(newBoard, i, j)) return setWinner(true);
  };

  return (
    <>
      <div className="game-info">
        {winner
          ? "Winner: " + (board.xIsNext ? "黑子" : "白子")
          : "Player: " + (board.xIsNext ? "白子" : "黑子")}
        {winner && (
          <button
            className="reset-game"
            onClick={() => {
              setWinner(null);
              setBoard({
                squares: Array(19)
                  .fill(null)
                  .map((i) => Array(19).fill(null)),
                xIsNext: true,
              });
            }}
          >
            再來一局
          </button>
        )}
      </div>
      <Board
        onClick={handleClickChess}
        value={board.squares}
        chess={board.xIsNext}
        winner={winner}
      />
    </>
  );
}

export default App;

// 檢查是否勝利function

// 1. 先寫一個可以檢查各方向的連線function，等等方便使用
function checkChess(board, currentX, currentY, directionX, directionY) {
  // 這邊邏輯都很簡單，自己看，記得在判斷式加上一些特例(例如棋子在邊邊的時候)
  let totalCount = 0;
  let tempX = currentX;
  let tempY = currentY;
  const chessValue = board[currentX][currentY];
  while (totalCount < 4) {
    // 0,1,2,3,4 這樣5個
    // early return 如果錯就快點 return 不要多去計算
    tempX += directionX;
    tempY += directionY;
    if (
      tempX < 0 ||
      tempY < 0 ||
      tempX > 18 ||
      tempY > 18 ||
      board[tempX][tempY] !== chessValue ||
      !chessValue
    ) {
      break;
    }
    totalCount++;
  }
  return totalCount;
}

// 2. 使用上面第1個function來判斷(左右、上下、左上右下、右上左下)的連線
function checkWinner(board, currentX, currentY) {
  if (
    checkChess(board, currentX, currentY, 1, 0) +
      checkChess(board, currentX, currentY, -1, 0) >=
      4 ||
    checkChess(board, currentX, currentY, 0, 1) +
      checkChess(board, currentX, currentY, 0, -1) >=
      4 ||
    checkChess(board, currentX, currentY, 1, 1) +
      checkChess(board, currentX, currentY, -1, -1) >=
      4 ||
    checkChess(board, currentX, currentY, 1, -1) +
      checkChess(board, currentX, currentY, -1, 1) >=
      4
  )
    return true;
  return false;
}

import { useState } from "react";
import "./Grid.css";
import Card from "../card/Card";
import IsWinner from "../../../helper/IsWinner";
let Grid = ({ numberOfCards }) => {
  const [board, setBoard] = useState(Array(numberOfCards).fill(""));
  const [turn, setTurn] = useState(true);
  const [winner, setWinner] = useState(null);
  let play = (index) => {
    if (turn == true) {
      board[index] = "O";
    } else {
      board[index] = "X";
    }
    const win = IsWinner(board, turn ? "O" : "X");
    if (win) {
      setWinner(win);
    }
    setBoard([...board]);
    setTurn(!turn);
  };
  let resetGame = () => {
    setTurn(turn);
    setBoard(Array(numberOfCards).fill(""));
    setWinner(null);
  };
  return (
    <div>
      <div className="center">
        {winner && (
          <>
            <h1 className="turn-high">The Winner is {winner}</h1>
            <button className="reset" onClick={resetGame}>
              Reset Game
            </button>
          </>
        )}
      </div>
      <h1 className="turn-high center">
        Current Turn is of : {turn ? "O" : "X"}
      </h1>
      <div className="Grid">
        <div className="innerGrid">
          {board.map((elem, idx) => (
            <Card
              key={idx}
              gamePlay={winner ? true : false}
              onPlay={play}
              player={elem}
              index={idx}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Grid;

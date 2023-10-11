import { useState } from "react"
import Button from "./components/Button";




const calculateWinner = (squares: string[] | null[]) => {
  const lines = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ]

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null;
}




function App() {
  const [squares, setSquares] = useState<string[] | null[]>(Array(8).fill(null));
  const [xIsNext, setXIsNext] = useState<boolean>(true)

  let status: string;
  const winner = calculateWinner(squares);
  if (winner) {
    status = "Winner" + winner
  } else {
    status = "Next Player is " + (xIsNext ? "X" : "O")
  }

  const handleClick = (i: number) => {
    const nextSquare = squares.slice()
    if (nextSquare[i] || calculateWinner(squares)) {
      return;
    }

    if (xIsNext) {
      nextSquare[i] = "X"
    } else {
      nextSquare[i] = "O"
    }

    setSquares(nextSquare)
    setXIsNext(!xIsNext)
  }
  return (
    <>
      <div className="status">{status}</div>
      <div className="squares">
        <Button square={squares[1]} onSquareClick={() => handleClick(1)} />
        <Button square={squares[2]} onSquareClick={() => handleClick(2)} />
        <Button square={squares[3]} onSquareClick={() => handleClick(3)} />
      </div>
      <div className="squares">
        <Button square={squares[4]} onSquareClick={() => handleClick(4)} />
        <Button square={squares[5]} onSquareClick={() => handleClick(5)} />
        <Button square={squares[6]} onSquareClick={() => handleClick(6)} />
      </div>
      <div className="squares">
        <Button square={squares[7]} onSquareClick={() => handleClick(7)} />
        <Button square={squares[8]} onSquareClick={() => handleClick(8)} />
        <Button square={squares[9]} onSquareClick={() => handleClick(9)} />
      </div>

    </>
  )
}

export default App

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
  }

  const nextSquares = squares.slice();
  if (xIsNext) {

  }
}
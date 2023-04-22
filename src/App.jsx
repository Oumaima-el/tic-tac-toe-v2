import { useState } from "react";
import "./App.css";

function Square({ value, onClick }) {
    return (
        <div
            className="border border-1 border-gray-400 bg-white h-12 w-12 text-2xl font-medium flex justify-center items-center cursor-pointer select-none"
            onClick={onClick}
        >
            {value}
        </div>
    );
}

function Board({ xIsNext, squares, onPlay }) {
    //const [xIsNext, setXIsNext] = useState(true);
    //const [squares, setSquares] = useState(Array(9).fill(null));
    let status;

    function handleClick(i) {
        if (squares[i] || calculateWinner(squares)) {
            return;
        }
        let nextSquares = squares.slice();
        if (xIsNext) {
            //status = "Next player: X";
            nextSquares[i] = "X";
        } else {
            //status = "Next player: O";
            nextSquares[i] = "O";
        }

        //setSquares(nextSquares);
        //setXIsNext(!xIsNext);
        onPlay(nextSquares);
    }

    let winner = calculateWinner(squares);

    if (winner) {
        status = "Winner: " + winner;
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }

    return (
        <div className="board">
            <div className="text-start ml-5">{status}</div>
            <div className="m-5 mt-2">
                <div className="flex">
                    <Square value={squares[0]} onClick={() => handleClick(0)} />
                    <Square value={squares[1]} onClick={() => handleClick(1)} />
                    <Square value={squares[2]} onClick={() => handleClick(2)} />
                </div>
                <div className="flex">
                    <Square value={squares[3]} onClick={() => handleClick(3)} />
                    <Square value={squares[4]} onClick={() => handleClick(4)} />
                    <Square value={squares[5]} onClick={() => handleClick(5)} />
                </div>
                <div className="flex">
                    <Square value={squares[6]} onClick={() => handleClick(6)} />
                    <Square value={squares[7]} onClick={() => handleClick(7)} />
                    <Square value={squares[8]} onClick={() => handleClick(8)} />
                </div>
            </div>
        </div>
    );
}

export default function Game() {
    //const [xIsNext, setXIsNext] = useState(true);
    //const [squares, setSquares] = useState(Array(9).fill(null));
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    //setHistory();
    function onPlay(nextSquares) {
        //setSquares(nextSquares);
        //setXIsNext(!xIsNext);
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function undoMove() {
        setCurrentMove((move) => move - 1);
    }

    function redoMove() {
        setCurrentMove((move) => move + 1);
    }

    return (
        <div className="bg-gray-200 mx-auto w-1/2 p-10">
            <h1 className="text-4xl font-bold">Tic-Tac-Toe</h1>
            {currentMove}
            <div className="flex mt-10 justify-center">
                <Board
                    xIsNext={xIsNext}
                    squares={currentSquares}
                    onPlay={onPlay}
                />
                <div className="board-history mt-8 text-start">
                    <ol className="space-y-1">
                        <li>
                            <button
                                className="border border-1 border-gray-400 bg-gray-100 rounded px-1 disabled:bg-gray-300"
                                disabled={currentMove === 0}
                                onClick={() => undoMove()}
                            >
                                Undo
                            </button>
                        </li>
                        <li>
                            <button
                                className="border border-1 border-gray-400 bg-gray-100 rounded px-1 disabled:bg-gray-300"
                                disabled={currentMove === history.length - 1}
                                onClick={() => redoMove()}
                            >
                                Redo
                            </button>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
}

function calculateWinner(squares) {
    let lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (
            squares[a] === squares[a] &&
            squares[a] === squares[b] &&
            squares[a] === squares[c]
        ) {
            return squares[a];
        }
    }
    return null;
}

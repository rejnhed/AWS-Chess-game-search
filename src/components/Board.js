import React, {useState} from 'react';
import Chessdiagram from 'react-chessdiagram';
import axios from "axios";

const Board = props => {
    const [fen, setFen] = useState("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1");
    const [results, setResults] = useState([]);
    const lightSquareColor = '#2492FF'; // light blue
    const darkSquareColor = '#005EBB'; // dark blue
    const flip = false;
    const squareSize = 100;

    async function getResults() {
        // const {data} = await axios.get(`https://q0ofmm3pt4.execute-api.us-east-1.amazonaws.com/dev/fen/a?fen=${fen}`)
        const {data} = await axios.get(`https://q0ofmm3pt4.execute-api.us-east-1.amazonaws.com/dev/fen/a?fen=${fen}` && `https://explorer.lichess.ovh/master?fen=${fen}`)
        setResults(data)
    }

    return (
        <div className="board">
            <div><pre>{JSON.stringify(results, null, 2) }</pre></div>
            <div className="input-wrapper">
                <input
                    className="fen-search"
                    value={fen}
                    onChange={(e) => setFen(e.target.value)}
                />
                <button onClick={() => getResults()} className="search">Search by fen</button>
            </div>
            <Chessdiagram
                flip={flip}
                fen={fen}
                squareSize={squareSize}
                lightSquareColor={lightSquareColor}
                darkSquareColor={darkSquareColor}
                onMovePiece={onMovePiece}
            />
        </div>
    );
};

function onMovePiece(piece, fromSquare, toSquare) {
    let message = 'You moved ' + piece + fromSquare + ' to ' + toSquare + ' !';
    console.log(message);
}

export default Board;
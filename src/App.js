import logo from './logo.svg';
import './App.css';
import Board from "./components/Board";

import React from "react";
import {ChessBoardDndProvider} from "react-fen-chess-board";
import {DndProvider} from 'react-dnd'

function App() {
    return (
        <Board/>
    );
}

export default App;

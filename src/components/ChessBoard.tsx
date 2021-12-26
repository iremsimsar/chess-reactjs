import React from 'react'

import './ChessBoard.css'

const verticalAxis = [1,2,3,4,5,6,7,8]
const horizontalAxis = ['a','b','c','d','e','f','g','h']

export default function ChessBoard() {

    let board = []
    for(let i = 0; i< verticalAxis.length; i++){
        for(let j = 0; j<horizontalAxis.length; j++){
            board.push(<span>{horizontalAxis[i]}{verticalAxis[j]}</span>)
        }
    }
    return  <div id='chessboard'>{board}</div>
    
}
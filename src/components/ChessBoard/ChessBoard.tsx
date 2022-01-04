
import React from 'react'
import Tile from '../Tile/Tile'
import './ChessBoard.css'


const verticalAxis = ['1', '2', '3', '4', '5', '6', '7', '8']
const horizontalAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

interface Piece {
    image: string,
    x: number,
    y: number
}

const pieces: Piece[] = []

for (let p = 0; p < 8; p++) {
    const type = p === 0 ? 'b' : 'w'
    const y = p === 0 ? 7 : 0
    pieces.push(
        { image: `assets/images/rook_${type}.png`, x: 0, y: y },
        { image: `assets/images/knight_${type}.png`, x: 1, y: y },
        { image: `assets/images/bishop_${type}.png`, x: 2, y: y },
        { image: `assets/images/queen_${type}.png`, x: 3, y: y },
        { image: `assets/images/king_${type}.png`, x: 4, y: y },
        { image: `assets/images/bishop_${type}.png`, x: 5, y: y },
        { image: `assets/images/knight_${type}.png`, x: 6, y: y },
        { image: `assets/images/rook_${type}.png`, x: 7, y: y })
    }

for (let i = 0; i < 8; i++) {
    pieces.push({image: 'assets/images/pawn_b.png',x: i, y: 6})
}

for (let i = 0; i < 8; i++) {
    pieces.push({image: 'assets/images/pawn_w.png', x: i,y: 1})
}

function grabPiece(e:React.MouseEvent) {
    const element = e.target as HTMLElement;
    if(element.classList.contains('chess-piece'))
    console.log(e.target)

    const x = e.clientX -50
    const y = e.clientY -50
    element.style.position = "absolute"
    element.style.left = `${x}px`
    element.style.top = `${y}px`
}

function movePiece(e: React.MouseEvent) {

    const element = e.target as HTMLElement
    if(element.classList.contains('chess-piece'))
    console.log(e.target)

    const x = e.clientX -50
    const y = e.clientY -50
    element.style.position = "absolute"
    element.style.left = `${x}px`
    element.style.top = `${y}px`
}

export default function ChessBoard() {

    let board = []
    //satrançta satırlar a8 a7 a6 şeklinde ilerliyor.
    for (let j = verticalAxis.length - 1; j >= 0; j--) {
        for (let i = 0; i < horizontalAxis.length; i++) {
            const number = i + j + 2
            let image = undefined

            pieces.forEach(p => {
                if (p.x === i && p.y === j) {
                    image = p.image
                }
            })
            board.push(<Tile key={`${i},${j}`} image={image} number={number} />)

        }
    }
    return <div onMouseMove = {e => movePiece(e)} onMouseDown={e => grabPiece(e)} id='chessboard'>{board}</div>
}

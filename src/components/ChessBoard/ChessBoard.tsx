
import Tile from '../Tile/Tile'
import './ChessBoard.css'


const verticalAxis = ['1', '2', '3', '4', '5', '6', '7', '8']
const horizontalAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

interface Piece {
    image: string,
    x: number,
    y: number
}

const pieces: Piece [] = []

export default function ChessBoard() {

    let board = []
    //satrançta satırlar a8 a7 a6 şeklinde ilerliyor.
    for (let j = verticalAxis.length-1; j >= 0; j--) {
        for (let i = 0; i < horizontalAxis.length; i++) {
            const number = i+j+2
            let image
            board.push(<Tile  image = {image} number = {number} />)

            pieces.forEach(p => {

            })
    }
}
    return <div id='chessboard'>{board}</div>
}

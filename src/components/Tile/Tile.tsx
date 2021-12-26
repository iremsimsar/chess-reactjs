import './Tile.css'

interface Props {
    number: number
    image?: string
}

export default function Tile({number, image}: Props) {

    if(number%2 === 0)
        return <div className='tile black-tile'> <img src={image}/>
          </div>
    else
        return <div className='tile white-tile'></div>
}
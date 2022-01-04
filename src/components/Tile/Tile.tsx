import './Tile.css'

interface Props {
    number: number
    image?: string
}

export default function Tile({number, image}: Props) {

    if(number%2 === 0)
        return <div className='tile black-tile'> 
        {image && <div style={{backgroundImage: `url(${image})`}} className='chess-piece' ></div>}
          </div>
    else
        return <div className='tile white-tile'> 
         {image && <div style={{backgroundImage: `url(${image})`}} className='chess-piece' ></div> }
        </div>
}
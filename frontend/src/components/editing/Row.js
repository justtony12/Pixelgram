import React from 'react'
import '../editing/styles/row.scss'
import Pixel from '../editing/Pixel'

const Row = (props) => {
    const {width, selectedColor} = props

    let pixels = []

    for(let i = 0; i < width; i++) {
        pixels.push(<Pixel key={i} selectedColor={selectedColor} />)
    }

    return <div className='row'>{ pixels }</div>
}

export default Row
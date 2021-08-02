import React, { useState } from 'react'
import '../styles/pixel.scss'

export default function Pixel(props) {

    const {selectedColor} = props

    const [pixelColor, setPixelColor] = useState("#fff")
    const [originalColor, setOriginalColor] = useState(pixelColor)
    const [canChangeColor, setCanChangeColor] = useState(true)

    return <div className='pixel' style={{backgroundColor: pixelColor}}></div>
}
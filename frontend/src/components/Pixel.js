import React, { useState } from 'react'
import '../styles/pixel.scss'

export default function Pixel(props) {

    const {selectedColor} = props

    const [pixelColor, setPixelColor] = useState("#fff")
    const [originalColor, setOriginalColor] = useState(pixelColor)
    const [canChangeColor, setCanChangeColor] = useState(true)

    function applyColor() {
        setPixelColor(selectedColor)
        setCanChangeColor(false)
    }

    function changeColorOnHover() {
        setOriginalColor(pixelColor)
        setPixelColor(selectedColor)
    }

    function reset() {
        if (canChangeColor) {
            setPixelColor(originalColor)
        }

        setCanChangeColor(true)
    }

    return (
        <div
            className='pixel'
            style={{backgroundColor: pixelColor}}
            onClick={applyColor}
            onMouseEnter={changeColorOnHover}
            onMouseLeave={reset}>
        </div>
    )
}
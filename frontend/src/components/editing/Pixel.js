import React, { useState } from 'react'
import '../editing/styles/pixel.scss';

const Pixel = (props) => {
    const {selectedColor} = props

    const [pixelColor, setPixelColor] = useState("#FFFFFF")
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

    function draw() {
        setOriginalColor(pixelColor)
        setPixelColor(selectedColor)
    }

    return (
        <div
            className='pixel'
            style={{backgroundColor: pixelColor}}
            onClick={applyColor}
            onDragOver={draw}
            onMouseEnter={changeColorOnHover}
            onMouseLeave={reset}>
        </div>
    )
}

export default Pixel;
import React, { useState } from 'react' //useState is a hook but I need to use Redux?
import '../styles/pixel.scss'

export default function Pixel(props) {

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

    return (
        <div
            className='pixel'
            style={{backgroundColor: pixelColor}}
            onClick={applyColor}
            onDragEnter={applyColor} //this is a bit buggy at the moment.
            onMouseEnter={changeColorOnHover}
            onMouseLeave={reset}>
        </div>
    )
}
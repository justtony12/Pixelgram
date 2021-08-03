import React, {useState} from 'react'
import '../styles/editor.scss'
import { PhotoshopPicker } from 'react-color'
import DrawingPanel from './DrawingPanel'

export default function Editor() {
    const [canvasHeight, setCanvasHeight] = useState(16)
    const [canvasWidth, setCanvasWidth] = useState(16)

    const [hideOptions, setHideOptions] = useState(false)
    const [hideCanvas, setHideCanvas] = useState(true)

    const [buttonText, setButtonText] = useState("Create Canvas")

    const [selectedColor, setColor] = useState("#000000")

    function createCanvas() {
        setHideOptions(!hideOptions)
        setHideCanvas(!hideCanvas)

        buttonText === "Create Canvas" ? setButtonText('Resize Canvas') : setButtonText("Create Canvas")
    }

    function changeColor(color) {
        setColor(color.hex)
    }

    return (
        <div id='editor'>
            <h1>Pixel Editor</h1>
            {hideCanvas && <h2>Enter Canvas Dimensions</h2>}

            {hideCanvas && (<div id="options">
                <div className="option">
                    <span>Height:</span>
                    <input type='number' className="panelInput" defaultValue={canvasWidth} onChange={(e) => {setCanvasHeight(e.target.value)}}></input>
                </div>

                <div className="option">
                    <span>Width:</span>
                    <input type='number' className="panelInput" defaultValue={canvasHeight} onChange={(e) => {setCanvasWidth(e.target.value)}}></input>
                </div>
            </div>)}

            <button className="button" onClick={createCanvas}>{buttonText}</button>

            {hideOptions && (<PhotoshopPicker color={selectedColor} onChangeComplete={changeColor} />)}<br></br>

            {hideOptions && (<DrawingPanel
                height={canvasHeight}
                width={canvasWidth}
                selectedColor={selectedColor}
            />)}
        </div>
    )
}
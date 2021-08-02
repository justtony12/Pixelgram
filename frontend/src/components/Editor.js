import React, {useState} from 'react'
import '../styles/editor.scss'
import { CirclePicker} from 'react-color'

export default function Editor() {
    const [panelWidth, setCanvasWidth] = useState(16)
    const [panelHeight, setCanvasHeight] = useState(16)

    const [hideOptions, setHideOptions] = useState(false)
    const [hideCanvas, setHideCanvas] = useState(true)

    const [buttonText, setButtonText] = useState("Create Canvas")

    const [selectedColor, setColor] = useState("#607d8b")

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
                    <input type='number' className="panelInput" defaultValue={panelWidth} onChange={(e) => {setCanvasHeight(e.target.value)}}></input>
                </div>

                <div className="option">
                    <span>Width:</span>
                    <input type='number' className="panelInput" defaultValue={panelHeight} onChange={(e) => {setCanvasWidth(e.target.value)}}></input>
                </div>
            </div>)}

            <button className="button" onClick={createCanvas}>{buttonText}</button>

            {hideOptions && (<CirclePicker color={selectedColor} onChangeComplete={changeColor} />)}
        </div>
    )
}
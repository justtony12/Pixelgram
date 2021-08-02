import React, {useState} from 'react'
import '../styles/editor.scss'

export default function Editor() {
    const [panelWidth, setCanvasWidth] = useState(16)
    const [panelHeight, setCanvasHeight] = useState(16)
    const [hideOptions, setHideOptions] = useState(false)
    const [hideCanvas, setHideCanvas] = useState(true)

    function createCanvas() {
        setHideOptions(!hideOptions)
        setHideCanvas(!hideCanvas)
    }

    return (
        <div id='editor'>
            <h1>Pixel Editor</h1>
            <h2>Enter Canvas Dimensions</h2>

            <div id="options">
                <div className="option">
                    <span>Height:</span>
                    <input type='number' className="panelInput" defaultValue={panelWidth} onChange={(e) => {setCanvasHeight(e.target.value)}}></input>
                </div>
            </div>

            <div id="options">
                <div className="option">
                    <span>Width:</span>
                    <input type='number' className="panelInput" defaultValue={panelHeight} onChange={(e) => {setCanvasWidth(e.target.value)}}></input>
                </div>
            </div>

            <button className="button">Create</button>
        </div>
    )
}
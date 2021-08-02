import React, {useState} from 'react'
import '../styles/editor.scss'

export default function Editor() {
    const [panelWidth, setPanelWidth] = useState(16)
    const [panelHeight, setPanelHeight] = useState(16)

    return (
        <div id='editor'>
            <h1>Pixel Editor</h1>
            <h2>Enter Panel Dimensions</h2>

            <div id="options">
                <div className="option">
                    <span>Height:</span>
                    <input type='number' className="panelInput" defaultValue={panelWidth}></input>
                </div>
            </div>

            <div id="options">
                <div className="option">
                    <span>Width:</span>
                    <input type='number' className="panelInput" defaultValue={panelHeight}></input>
                </div>
            </div>

            <button className="button">Create</button>
        </div>
    )
}
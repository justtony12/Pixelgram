import React from 'react'
import '../styles/editor.scss'

export default function Editor() {
    return (
        <div id='editor'>
            <h1>Pixel Editor</h1>
            <h2>Enter Panel Dimensions</h2>

            <span>Width:</span>
            <div id="options">
                <div className="option">
                    <input type='number' className="panelInput" defaultValue="16"></input>
                </div>
            </div>

            <span>Height
                :</span>
            <div id="options">
                <div className="option">
                    <input type='number' className="panelInput" defaultValue="16"></input>
                </div>
            </div>
        </div>
    )
}
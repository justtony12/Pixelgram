import React, {useRef} from 'react'
import '../styles/drawingPanel.scss'
import Row from './Row'
import { exportComponentAsPNG } from 'react-component-export-image'
import { exportComponentAsJPEG } from 'react-component-export-image'

export default function DrawingPanel(props) {
    const {height, width, selectedColor} = props

    const panelRef = useRef()

    let rows = []

    for (let i = 0; i < height; i++) {
        rows.push(<Row key={i} width={width} selectedColor={selectedColor} />)
    }

    return (
        <div id='drawingPanel'>
            <div id='pixels' ref={panelRef}>
                {rows}
            </div>

            <button className="button" onClick={() => exportComponentAsPNG(panelRef)} >Export as PNG</button>
            <button className="button" onClick={() => exportComponentAsJPEG(panelRef)} >Export as JPEG</button>
        </div>
    )
}
import React, {useRef} from 'react'
import '../styles/drawingPanel.scss'
import Row from './Row'
import { exportComponentAsPNG } from 'react-component-export-image'
import { exportComponentAsJPEG } from 'react-component-export-image'

const DrawingPanel = (props) => {
    const {height, width, selectedColor} = props

    const canvasRef = useRef()

    let rows = []

    for (let i = 0; i < height; i++) {
        rows.push(<Row key={i} width={width} selectedColor={selectedColor} />)
    }

    return (
        <div id='drawingPanel'>
            <div id='pixels' ref={canvasRef}>
                {rows}
            </div>

            <button
                className="button"
                onClick={() => exportComponentAsPNG(canvasRef)}
            >Export as PNG</button>
            
            <button
                className="button"
                onClick={() => exportComponentAsJPEG(canvasRef)}
            >Export as JPEG</button>
        </div>
    )
}

export default DrawingPanel
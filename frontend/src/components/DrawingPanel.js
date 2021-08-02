import React from 'react'
import '../styles/drawingPanel.scss'
import Row from './Row'

export default function DrawingPanel(props) {
    const {height, width, selectedColor} = props

    let rows = []

    for (let i = 0; i < height; i++) {
        rows.push(<Row key={i} width={width} selectedColor={selectedColor} />)
    }

    return (
        <div id='drawingPanel'>
            <div id='pixels'>
                {rows}
            </div>
        </div>
    )
}
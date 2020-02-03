import React, { useState, useEffect } from 'react'
import Constants from '../../constants'


function GridTile({ isActive, index, selectNote }) {
    const [backgroundColor, setBackgroundColor] = useState("blue")

    const handleClick = () => {
        selectNote(index)
    }

    useEffect(() => {
        console.log("button effect fired with bool: ", isActive)
        if (isActive) {
            setBackgroundColor("green")
        } else {
            setBackgroundColor("blue")
        }

    }, [isActive])


    return (
        <div>
            <button
                onClick={handleClick}
                style={{
                    width: Constants.TILE_SIZE,
                    height: Constants.TILE_SIZE,
                    backgroundColor
                }}></button>
        </div>
    )
}

export default GridTile;
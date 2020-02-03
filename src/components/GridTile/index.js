import React, { useState } from 'react'
import Constants from '../../constants'


function GridTile({ note }) {
    const [isActive, setActive] = useState(
        false
    );

    const handleClick = () => {
        setActive(!isActive)
        console.log("on note:", note)
    }

    return (
        <div>
            <button
                onClick={handleClick}
                style={{
                    width: Constants.TILE_SIZE,
                    height: Constants.TILE_SIZE,
                    backgroundColor: isActive ? "green" : "blue"
                }}></button>
        </div>
    )
}

export default GridTile;
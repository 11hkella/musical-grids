import React from 'react'
import Constants from '../../constants'


function GridTile({ isActive, index }) {


    const handleClick = () => {
        console.log(isActive)
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
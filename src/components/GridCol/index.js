import React from 'react'
import Constants from '../../constants'
import GridTile from '../GridTile'


function GridCol(params) {

    return (
        <div>
            {Constants.NOTES.map((note, i) => {
                return <GridTile
                    note={note}
                    key={i}
                />
            })}
        </div>
    )

}

export default GridCol;
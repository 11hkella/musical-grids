import React from 'react'
import GridTile from '../GridTile'
import Constants from '../../constants'


function SynthGrid() {

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

export default SynthGrid;
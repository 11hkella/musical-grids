import React, { useState } from 'react'
import Constants from '../../constants'
import GridTile from '../GridTile'


function GridCol({ index }) {

    const noteMask = []
    for (let i = 0; i < Constants.NOTES.length; i++) {
        noteMask.push(false)
    }

    const [activeArr, setActive] = useState(noteMask)

    return (
        <div className='grid-col'>
            {activeArr.map((isActive, i) => {
                return <GridTile
                    isActive={isActive}
                    key={i}
                    index={i}
                    setActive={setActive}
                />
            })}
        </div>
    )

}

export default GridCol;
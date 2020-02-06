import React, { useState } from 'react'
import Constants from '../../constants'
import GridTile from '../GridTile'


function GridCol({ position }) {

    const initalFalseArr = []
    for (let i = 0; i < Constants.NOTES.length; i++) {
        initalFalseArr.push(false)
    }


    const [activeArr, setActive] = useState([...initalFalseArr])


    const selectNote = index => {
        const currActiveIndex = activeArr.findIndex(el => el === true)
        let nextActiveArr = initalFalseArr

        if (currActiveIndex !== index) {
            nextActiveArr[index] = true
        }
        setActive(nextActiveArr)
    }


    return (
        <div className='grid-col'>
            {activeArr.map((isActive, i) => {
                return <GridTile
                    isActive={isActive}
                    key={i}
                    index={i}
                    selectNote={selectNote}
                />
            })}
        </div>
    )

}

export default GridCol;
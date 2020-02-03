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
        console.log("found true at : ", currActiveIndex)

        if (currActiveIndex !== index) {
            nextActiveArr[index] = true
        }
        console.log("the active array now looks like : ", nextActiveArr)
        setActive(nextActiveArr)
        console.log("\nAcvtive array state: \n", activeArr)
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
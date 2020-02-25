import React, { useEffect, useState } from 'react'
import Constants from '../../constants'
import { CustomSynth } from '../Synths'
import Tone from '../Tone'

function DrumGrid() {

    const [steps, setSteps] = useState(
        [false, false, false, false,
            false, false, false, false,
            false, false, false, false,
            false, false, false, false]
    )



    return (
        <div className='drum-grid'>

            {steps.map((step, index) => {
                <button className=''>

                </button>
            })}

        </div>
    )


}

export default DrumGrid
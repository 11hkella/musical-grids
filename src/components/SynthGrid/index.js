import React, { useEffect, useState } from 'react'
import GridCol from '../GridCol'
import Constants from '../../constants'
import { CustomSynth } from '../Synths'
import Tone from '../Tone'
import './style.css'


function SynthGrid() {

    const [melody, setMelody] = useState([...Array(Constants.GRID_LENGTH).keys()])

    function run() {
        const synth = new CustomSynth();

        const synthLoop = new Tone.Loop(time => {
            synth.triggerAttackRelease("C4", "8n", time);
        }, "4n");

        synthLoop.start("0m").stop("2m");

        return () => {
            synth.dispose();
            synthLoop.dispose();
        };
    }

    useEffect(run, []);

    return (
        <div className='synth-grid'>
            {melody.map((el, i) => {
                return <GridCol
                    key={i}
                    index={i}
                    setMelody={setMelody}
                />
            })}
        </div>
    )

}

export default SynthGrid;
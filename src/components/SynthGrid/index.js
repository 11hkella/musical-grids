import React, { useEffect } from 'react'
import GridTile from '../GridTile'
import Constants from '../../constants'
import { CustomSynth } from '../Synths'
import Tone from '../Tone'


function SynthGrid() {

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
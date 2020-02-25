import React, { useState, useEffect } from "react";
import * as Tone from "tone";
import Constants from '../../constants'

export default function (params) {
    const [looping, setLooping] = useState(false);
    const [playing, setPlaying] = useState(false);
    const [position, setPosition] = useState(Tone.Transport.position);

    useEffect(() => {
        Tone.Transport.position = 0;
        Tone.Transport.setLoopPoints(0, Constants.LOOP_LENGTH);
        Tone.Transport.loop = looping;
    }, [looping]);

    useEffect(() => {
        const id = Tone.Transport.scheduleRepeat(
            () => {
                setPosition(Tone.Transport.position.split(".")[0]);
            },
            "128n",
            "0m"
        );
        return () => {
            Tone.Transport.clear(id);
            stop();
        };
    }, []);

    const play = () => {
        Tone.Transport.start();
        setPlaying(true);
        setLooping(true);
    };

    const stop = () => {
        Tone.Transport.stop();
        setPlaying(false);
        setLooping(false);
    };

    return (
        <div className="transport">
            <div className="display">{position}</div>
            <div className="controls">
                <button className="loop" onClick={play} disabled={playing}>
                    play
        </button>
                <button onClick={stop} disabled={!playing}>
                    stop
        </button>
            </div>
        </div>
    );
}
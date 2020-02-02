import Tone from '../Tone'


export function CustomSynth() {
    //pass in some initial values for the filter and filter envelope
    const synth = new Tone.Synth({
        oscillator: {
            type: "pwm",
            modulationFrequency: 0.2
        },
        envelope: {
            attack: 0.02,
            decay: 0.1,
            sustain: 0.2,
            release: 0.9,
        }
    }).toMaster()

    return synth
}
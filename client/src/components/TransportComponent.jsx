import React, { Component } from 'react'
import Instrument from './Instrument'
import Steps from './Steps'
import InstrumentRack from './InstrumentRack'
import PlayPause from './PlayPause'
import { Transport } from 'tone'

export default class TransportComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            steps: [false, false, false, false, false, false, false, false,
                false, false, false, false, false, false, false, false],
            selected: null
        }
    }

    handleStepChange = (id) => {
        const s = this.state.steps
        s[id] = !s[id]
        this.setState({
            steps: s,
        })
    }

    play = () => {
        Transport.start()
    }

    pause = () => {
        Transport.stop()
    }

    selectInstrument = (selected, steps) => {
        if (this.state.selected === selected) {
            this.setState({
                selected: null, steps: [false, false, false, false, false, false, false, false,
                    false, false, false, false, false, false, false, false]
            })
        } else {
            this.setState({ selected, steps })
        }
    }

    render() {
        return (
            <div>
                <h1>Drum Machine</h1>
                <PlayPause play={this.play} pause={this.pause} />
                <InstrumentRack steps={this.state.steps} selectInstrument={this.state.selected} >
                    <Instrument key='Kick' engine='Kick' handleClick={this.selectInstrument} />
                    <Instrument key='Clap' engine='Clap' handleClick={this.selectInstrument} />
                    <Instrument key='Hat' engine='Hat' handleClick={this.selectInstrument} />
                    <Instrument key='Snare' engine='Snare' handleClick={this.selectInstrument} />
                </InstrumentRack>
                <Steps handleStepChange={this.handleStepChange} steps={this.state.steps} />
            </div>
        )
    }

}
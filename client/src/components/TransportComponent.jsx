import React, { Component } from 'react'
import Instrument from './Instrument'
import Steps from './Steps'
import InstrumentRack from './InstrumentRack'

export default class TransportComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            steps: [false, false, false, false, false, false, false, false,
                false, false, false, false, false, false, false, false]
        }
    }

    handleStepChange = (id) => {
        const s = this.state.steps
        s[id] = !s[id]
        this.setState({
            steps: s,
        })
    }

    render() {
        return (
            <div>
                <h1>Drum Machine</h1>
                <InstrumentRack steps={this.state.steps}>
                    <Instrument />
                </InstrumentRack>
                <Steps handleStepChange={this.handleStepChange} steps={this.state.steps} />
            </div>
        )
    }

}
import React, { Component } from 'react'
import { Kick } from '../engines/kick'
import { Clap } from '../engines/clap'
import { Hat } from '../engines/hat'
import { Snare } from '../engines/snare'
import { Transport, Time } from 'tone'

export default class Instrument extends Component {

    constructor(props) {
        super(props)
        this.ctx = new AudioContext()
        this.state = {
            steps: [false, false, false, false, false, false, false, false,
                false, false, false, false, false, false, false, false]
        }

        switch (this.props.engine) {
            case 'Kick':
                this.sound = new Kick(this.ctx)
                break
            case 'Clap':
                this.sound = new Clap(this.ctx)
                break
            case 'Hat':
                this.sound = new Hat(this.ctx)
                break
            case 'Snare':
                this.sound = new Snare(this.ctx)
                break
            default:
                this.sound = null
        }

        Transport.loop = true
        Transport.loopEnd = '1m'
    }


    componentDidUpdate() {
        if (this.props.steps && !areEqual(this.props.steps, this.state.steps)) {
            this.setState(
                { steps: [...this.props.steps] }
            )
            this.createLoop()
        }
    }

    createLoop = () => {
        Transport.clear(this.loopId)
        const loop = (time) => {
            this.state.steps.map((s, i) => {
                if (s) {
                    this.sound.trigger(time + i * Time('16n').toSeconds())
                }
            })
        }

        this.loopId = Transport.schedule(loop, "0")
    }

    handleClick = () => {
        if (this.props.handleClick) {
            this.props.handleClick(this.props.engine, this.state.steps)
        }
    }


    render() {
        const instrumentStyle = {
            backgroundColor: this.props.selected ? '#2AC7DC' : '#CBCBCB',
        }
        return <button
            onClick={this.handleClick}
            style={instrumentStyle} >
            <p>{this.props.engine}</p>
        </button>

    }
}

export const areEqual = (a, b) => {
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false
    }
    return true
}
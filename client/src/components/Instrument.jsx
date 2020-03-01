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
                false, false, false, false, false, false, false, false],
            volume: 1,
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
            this.props.handleClick(this.props.engine, [...this.state.steps])
        }
    }


    handleParams = (e) => {
        const [name, value] = [e.target.name, e.target.value]

        this.sound[name] = value
        this.setState({ [`${name}`]: value })
    }


    render() {
        const instrumentStyle = {
            backgroundColor: this.props.selected ? '#2AC7DC' : '#CBCBCB',
        }

        const params = {
            vol: {
                max: '1',
                min: '0',
            }
        }
        return (
            <div>
                <button
                    onClick={this.handleClick}
                    style={instrumentStyle} >
                    <p>{this.props.engine}</p>
                </button>

                <div>
                    <p>Volume</p>
                    <input
                        type='range'
                        name='volume'
                        min={params.vol.min}
                        max={params.vol.max}
                        step='0.1'
                        value={this.state.volume}
                        onChange={this.handleParams}
                    />

                </div>

                <div>
                    <p>Decay</p>
                    <input
                        type='range'
                        name='decay'
                        min={params.vol.min}
                        max={params.vol.max}
                        step='0.1'
                        value={this.state.volume}
                        onChange={this.handleParams}
                    />

                </div>

                <div>
                    <p>Tone</p>
                    <input
                        type='range'
                        name='tone'
                        min={params.vol.min}
                        max={params.vol.max}
                        step='0.1'
                        value={this.state.volume}
                        onChange={this.handleParams}
                    />

                </div>

            </div>
        )
    }
}

export const areEqual = (a, b) => {
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false
    }
    return true
}
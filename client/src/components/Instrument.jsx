import React, { Component } from 'react'
import { Kick } from '../engines/kick'
import { Clap } from '../engines/clap'
import { Hat } from '../engines/hat'
import { Snare } from '../engines/snare'
import { Transport, Time } from 'tone'
import { params } from '../engines/parameters'
import Button from '@material-ui/core/Button'
import Slider from '@material-ui/core/Slider'
import Typography from '@material-ui/core/Typography'


export default class Instrument extends Component {

    constructor(props) {
        super(props)
        this.ctx = new AudioContext()
        this.state = {
            steps: [false, false, false, false, false, false, false, false,
                false, false, false, false, false, false, false, false],
            volume: params[this.props.engine].vol.val,
            tone: params[this.props.engine].tone.val,
            decay: params[this.props.engine].decay.val,
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

        this.loopId = Transport.schedule(loop, "0:0:0")
    }

    handleClick = () => {
        if (this.props.handleClick) {
            this.props.handleClick(this.props.engine, [...this.state.steps])
        }
    }


    handleParams = name => (e, newValue) => {
        this.sound[name] = newValue
        this.setState({ [name]: newValue })
    }


    render() {
        const instrumentStyle = {
            backgroundColor: this.props.selected ? '#2AC7DC' : '#CBCBCB',
        }

        return (
            <div>
                <Button
                    variant='contained'
                    onClick={this.handleClick}
                    style={instrumentStyle} >
                    <p>{this.props.engine}</p>
                </Button>

                <div>
                    <Typography>Volume</Typography>
                    <Slider
                        aria-labelledby="continuous-slider"
                        min={params[this.props.engine].vol.min}
                        max={params[this.props.engine].vol.max}
                        step={0.01}
                        value={this.state.volume}
                        onChange={this.handleParams('volume')}
                    />
                </div>

                <div>
                    <Typography>Decay</Typography>
                    <Slider
                        aria-labelledby="continuous-slider"
                        min={params[this.props.engine].decay.min}
                        max={params[this.props.engine].decay.max}
                        step={0.01}
                        value={this.state.decay}
                        onChange={this.handleParams('decay')}
                    />

                </div>

                <div>
                    <Typography>Tone</Typography>
                    <Slider
                        min={params[this.props.engine].tone.min}
                        max={params[this.props.engine].tone.max}
                        step={0.1}
                        value={this.state.tone}
                        onChange={this.handleParams('tone')}
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
import React, { Component } from 'react'
import { Kick } from '../engines/kick'
import { Transport, Time } from 'tone'

export default class Instrument extends Component {

    constructor(props) {
        super(props)
        this.ctx = new AudioContext()
        this.sound = new Kick(this.ctx)
        this.state = {
            steps: [false, false, false, false, false, false, false, false,
                false, false, false, false, false, false, false, false]
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
        console.log('transport start')
        Transport.start()
    }


    render() {
        return <div className='kick-container'>
            <button
                onClick={this.handleClick}>
                Kick
                </button>
        </div>
    }
}

export const areEqual = (a, b) => {
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false
    }
    return true
}
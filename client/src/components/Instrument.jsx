import React, { Component } from 'react'
import { Kick } from '../engines/kick'
import { Transport } from 'tone'

export default class Instrument extends Component {

    constructor(props) {
        super(props)
        this.ctx = new AudioContext()
        this.kick = new Kick(this.ctx)

        console.log(Transport)

        Transport.bpm.value = 120
        Transport.schedule(this.startLoop, "0")

        Transport.loop = true
        Transport.loopEnd = '1m'
    }


    createLoop = () => {
        Transport.clear(this.loopId)
        const loop = (time) => {
            console.log('start loop', time)
            this.kick.trigger(time)
            this.kick.trigger(time + 0.5)
            this.kick.trigger(time + 1)
            this.kick.trigger(time + 1.5)
        }
        this.loopId = Transport.schedule(loop, "0")

    }

    handleClick = () => {
        this.createLoop()
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
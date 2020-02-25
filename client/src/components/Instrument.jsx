import React, { Component } from 'react'
import { Kick } from '../engines/kick'

export default class Instrument extends Component {

    constructor(props) {
        super(props)
        this.ctx = new AudioContext
        this.kick = new Kick(this.ctx)
    }

    handleClick = () => {
        this.kick.trigger(this.ctx.currentTime)
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
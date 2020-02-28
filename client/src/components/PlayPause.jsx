import React, { Component } from 'react'

export default class PlayPause extends Component {
    constructor(props) {
        super(props)
        this.state = {
            playing: false
        }
    }

    handleClick = () => {
        if (this.state.playing) {
            this.props.pause()
        } else {
            this.props.play()
        }
        this.setState({
            playing: !this.state.playing
        })
    }


    render() {
        return (
            <div>
                <button onClick={this.handleClick}>
                    {this.state.playing ? 'Pause' : 'Play'}
                </button>
            </div>
        )
    }
}
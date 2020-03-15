import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import PlayIcon from '../images/play_arrow-24px.svg'
import PauseIcon from '../images/pause-24px.svg'

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
                <Button variant='contained' color='secondary' onClick={this.handleClick}>
                    <img src={this.state.playing ? PauseIcon : PlayIcon} alt={this.state.playing ? 'Pause' : 'Play'} />
                </Button>
            </div>
        )
    }
}
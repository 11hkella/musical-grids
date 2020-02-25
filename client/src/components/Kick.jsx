import React, { Component } from 'react'

export default class Kick extends Component {

    handleClick = () => {
        console.log("boooom!")
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
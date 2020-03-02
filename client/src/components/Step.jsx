import React, { Component } from 'react'

export default class Step extends Component {


    handleClick = () => {
        this.props.onClick(this.props.id)
    }


    render() {
        const style = {
            width: '4.2em',
            height: '7em',
            backgroundColor: this.props.on ? '#2AC7DC' : '#CBCBCB',
            borderRadius: '0.8em',
            margin: 5,
            display: 'inline-block'
        }

        let count = this.props.id % 4 + 1

        if (count === 1) {
            count = Math.ceil((this.props.id + 1) / 4)
            style.color = 'red'
        }

        return (
            <button style={style} onClick={this.handleClick} disabled={!this.props.selected} >
                {count}
            </button>
        )
    }
}
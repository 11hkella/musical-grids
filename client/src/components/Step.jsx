import React, { Component } from 'react'

export default class Step extends Component {


    handleClick = () => {
        this.props.onClick(this.props.id)
    }


    render() {
        const style = {
            width: '3em',
            height: '5em',
            backgroundColor: this.props.on ? '#2AC7DC' : '#CBCBCB',
            borderRadius: '0.8em',
            margin: 5,
            display: 'inline-block'
        }

        const count = this.props.id % 4 + 1

        return (
            <div style={style} onClick={this.handleClick} >
                {count}
            </div>
        )
    }
}
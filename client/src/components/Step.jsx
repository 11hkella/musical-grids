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

        return (
            <div style={style} onClick={this.handleClick} ></div>
        )
    }
}
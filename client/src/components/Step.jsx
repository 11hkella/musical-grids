import React, { Component } from 'react'
import Button from '@material-ui/core/Button'

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
            display: 'inline-block',
            fontWeight: 200
        }

        let count = this.props.id % 4
        let symbol = ''

        if (count === 0) {
            style.width = '4.8em'
            style.height = '7.8em'
            symbol = Math.floor(this.props.id / 4) + 1
        } else if (count === 2) {
            symbol = '&'
        }

        return (
            <Button
                style={style}
                onClick={this.handleClick}
                disabled={!this.props.selected}
                variant='contained' >
                {symbol}
            </Button>
        )
    }
}
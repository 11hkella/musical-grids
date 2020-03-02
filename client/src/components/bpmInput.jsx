import React, { Component } from 'react'

export default class BpmInput extends Component {

    constructor(props) {
        super(props)
        this.state = {
            bpm: 120,
            isSet: true
        }
    }


    handleChange = (e) => {
        const { name, value } = e.currentTarget

        this.setState({ [name]: value, isSet: false })
    }


    handleSubmit = (e) => {
        e.preventDefault()
        this.props.setTempo(this.state.bpm)
    }


    render() {
        const style = {
            color: this.state.isSet ? '#999' : 'inherit'
        }


        return (
            <form>
                <input
                    style={style}
                    type='number'
                    name='bpm'
                    id='bpm'
                    min='60'
                    max='280'
                    value={this.state.bpm}
                    onChange={this.handleChange} />
                <input
                    type='submit'
                    value='Set Tempo'
                    onSubmit={this.handleSubmit} />
            </form>


        )
    }
}
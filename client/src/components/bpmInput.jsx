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


    handleSubmit = () => {
        this.props.setTempo(this.state.bpm)
    }


    render() {
        return (
            <form>
                <input
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
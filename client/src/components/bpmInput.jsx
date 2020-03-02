import React, { Component } from 'react'

export default class BpmInput extends Component {

    constructor(props) {
        super(props)
        this.state = {
            bpm: 120
        }
    }


    handleChange = (e) => {
        const { name, value } = e.currentTarget

        this.setState({ [name]: value })
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
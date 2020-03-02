import React, { Component } from 'react'

export default class BpmInput extends Component {

    constructor(props) {
        super(props)
        this.state = {
            bpm: 120,
            isSet: true
        }
    }

    componentDidMount() {
        this.setState({ bpm: this.props.bpm })
    }

    handleChange = (e) => {
        const { name, value } = e.currentTarget
        console.log(name, ' : ', value)
        this.setState({ [name]: value, isSet: false })
    }


    handleClick = (e) => {
        this.setState({ isSet: true })
        this.props.setTempo(Number(this.state.bpm))
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
                    placeholder={this.state.bpm}
                    onChange={this.handleChange} />
                <input
                    type='button'
                    value='Set Tempo'
                    disabled={this.state.isSet ? true : false}
                    onClick={this.handleClick} />
            </form>


        )
    }
}
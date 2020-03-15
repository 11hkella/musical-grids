import React, { Component } from 'react'
import TextFeild from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

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
        this.setState({ [name]: value, isSet: false })
    }


    handleClick = (e) => {
        this.setState({ isSet: true })
        this.props.setTempo(Number(this.state.bpm))
    }


    render() {
        return (
            <form>
                <TextFeild
                    type='number'
                    name='bpm'
                    label='BPM'
                    id="filled-basic"
                    min='60'
                    max='280'
                    placeholder={this.state.bpm.toString()}
                    onChange={this.handleChange} />
                <Button
                    variant='outlined'
                    disabled={this.state.isSet ? true : false}
                    onClick={this.handleClick}>
                    Set Tempo
                </Button>
            </form>


        )
    }
}
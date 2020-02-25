import React, { Component } from 'react'
import Step from './Step'

export default class Steps extends Component {
    render() {
        return (
            <div>
                {this.props.steps.map((step, idx) => {
                    return (
                        <Step on={step} onClick={this.props.handleStepChange} key={idx} id={idx} />
                    )
                })}
            </div>
        )
    }
}
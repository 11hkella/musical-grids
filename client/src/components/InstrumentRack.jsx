import React, { Component } from 'react'

export class InstrumentRack extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div style={{ flex: 1, flexDirection: "row", justifyContent: 'space-between' }}>
                {this.props.children}
            </div>
        )
    }
}
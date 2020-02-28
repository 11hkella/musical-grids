import React, { Component } from 'react'

export default class InstrumentRack extends Component {
    constructor(props) {
        super(props)
    }


    render() {

        const childrenWithProps = React.Children.map(this.props.children, (child) => {
            if (typeof child === 'object') {
                if (child.key === this.props.selectedInstrument) {
                    return React.cloneElement(child, { steps: this.props.steps, selected: true })
                } else {
                    return React.cloneElement(child, { steps: null, selected: false })
                }
            }
            return child;
        })


        return (
            <div style={{ flex: 1, flexDirection: "row", justifyContent: 'space-between' }}>
                {childrenWithProps}
            </div>
        )
    }
}
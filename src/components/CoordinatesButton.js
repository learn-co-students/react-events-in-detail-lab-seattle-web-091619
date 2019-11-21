// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export class CoordinatesButton extends Component {
    state = {
        cordinateArray: []
    }
    mousePosition = (event) =>{
        this.setState({cordinateArray: [event.clientX, event.clientY]})
        console.log(this.state.cordinateArray)
        {this.props.onReceiveCoordinates(this.state.cordinateArray)}
    }

    render() {
        return (
                <button onClick={this.mousePosition}>Button</button>
        )
    }
}

export default CoordinatesButton

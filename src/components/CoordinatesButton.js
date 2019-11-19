import React, { Component } from 'react'

export class CoordinatesButton extends Component {
    
    
    
    
    getCoordinates = (event) => {
        
        let x = event.clientX
        let y = event.clientY
        console.log(x,y)
        this.props.onReceiveCoordinates([x,y])
        
    }
    
    
    
    render() {
        return (
            <div>
                <button onClick={this.getCoordinates} >Click me</button>
                
            </div>
        )
    }
}

export default CoordinatesButton


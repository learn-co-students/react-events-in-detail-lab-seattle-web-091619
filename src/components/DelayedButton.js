// Code DelayedButton Component Here
import React, { Component } from 'react'

export class DelayedButton extends Component {
    state = {
        storeEvent: {}
    }
    setTimeOut = (event) => {
        event.persist();
        // console.log("1", event)
        this.setState({storeEvent: event})
        // console.log("2", this.state.storeEvent)
        setTimeout(() =>{ this.props.onDelayedClick(this.state.storeEvent); }, this.props.delay)
        // console.log("3", event)
        // console.log("4", this.state.storeEvent)
    }
    
    render() {
        return (
            <button onClick={this.setTimeOut}>DelayedButton</button>
        )
    }
}

// handleClick = event => {
//     event.persist();
//     setTimeout(() => {
//       this.props.onDelayedClick(event);
//     }, this.props.delay);
//   };

//   render() {
//     return <button onClick={this.handleClick}>Delayed</button>;
//   }

export default DelayedButton

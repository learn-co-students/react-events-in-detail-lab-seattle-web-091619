// Code CoordinatesButton Component Here
import React, { Component } from 'react';

class CoordinatesButton extends Component {

  getClickData = evt => {
    this.props.onReceiveCoordinates([evt.clientX, evt.clientY])
  };

  render() {
    return (
      <button onClick={ this.getClickData }>Coordinates</button>
    )
  }
}

export default CoordinatesButton
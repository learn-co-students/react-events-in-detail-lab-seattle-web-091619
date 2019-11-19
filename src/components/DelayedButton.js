// Code DelayedButton Component Here
import React, { Component} from 'react';

class DelayedButton extends Component {
  whenClicked = evt => {
    evt.persist();
    setTimeout(() => {
      // onDelayedClick prop is a function being passed in
      this.props.onDelayedClick(evt);
    }, this.props.delay)
  }

  render() {
    return (
      <button onClick={ this.whenClicked }>Delayed</button>
    )
  }
}

export default DelayedButton;
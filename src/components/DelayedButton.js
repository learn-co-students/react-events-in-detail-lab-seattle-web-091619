import React, { Component } from 'react'

export class DelayedButton extends Component {
    
    clickHandler = (event) => {
        event.persist();
        setTimeout(() => {
            this.props.onDelayedClick(event);
          }, this.props.delay);

    }
    
    
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Delayed Button</button>
            </div>
        )
    }
}

export default DelayedButton

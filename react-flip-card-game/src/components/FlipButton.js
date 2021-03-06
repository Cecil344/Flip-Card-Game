import React, { Component } from 'react';
import {connect} from 'react-redux';
import {flip} from '../actions';//don't forget to go to Actions

// This component uses Redux state. It will be updated automatically whenever
// the Redux state changes.
class FlipButton extends Component {
    render() {
      return (
            <button onClick={this.props.flip} className="FlipButton">
                Flip
            </button>
        );
    }
}

const mapActionsToProps = {
  flip: flip
};

export default connect(null, mapActionsToProps)(FlipButton);

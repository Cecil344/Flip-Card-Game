import React, { Component } from 'react';
import {connect} from 'react-redux';
import {shuffle} from '../actions';

// This component uses Redux state. It will be updated automatically whenever
// the Redux state changes.
class ShuffleButton extends Component {
    render() {
      return (
            <button onClick={this.props.prev} disabled={this.props.disabled} className="ShuffleButton">
                Shuffle
            </button>
        );
    }
}


const mapActionsToProps = {
  shuffle: shuffle
};

export default connect(null, mapActionsToProps)(ShuffleButton);

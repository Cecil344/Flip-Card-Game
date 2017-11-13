import React, { Component } from 'react';
import {connect} from 'react-redux';
import {flip} from '../actions';//don't forget to go to Actions

// This component uses Redux state. It will be updated automatically whenever
// the Redux state changes.
class NextButton extends Component {
    render() {
      return (
            <button onClick={this.props.next} disabled={this.props.disabled} className="NextButton">
                Next
            </button>
        );
    }
}

function mapStateToProps(state) {
    return {
        disabled: state.currentCardIndex >= state.cards.length - 1
    }
}

const mapActionsToProps = {
  next: next
};

export default connect(mapStateToProps, mapActionsToProps)(NextButton);

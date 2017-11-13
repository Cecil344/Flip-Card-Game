import React, { Component } from 'react';
import {connect} from 'react-redux';
import {prev} from '../actions';

// This component uses Redux state. It will be updated automatically whenever
// the Redux state changes.
class PrevButton extends Component {
    render() {
      return (
            <button onClick={this.props.prev} disabled={this.props.disabled} className="PrevButton">
                Prev
            </button>
        );
    }
}

function mapStateToProps(state) {
    return {
        disabled: state.currentCardIndex <= 0
    }
}

const mapActionsToProps = {
  prev: prev
};

export default connect(mapStateToProps, mapActionsToProps)(PrevButton);

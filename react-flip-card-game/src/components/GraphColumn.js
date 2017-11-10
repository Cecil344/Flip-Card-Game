import React, { Component } from 'react';

class GraphColumn extends Component {

    render() {
        let percentHeight = (this.props.value / this.props.max * 100).toFixed(2) + "%";
        if (this.props.value === 0) {
            percentHeight = "auto";
        }

        return (
            <div className="GraphColumn">
                <div className="GraphColumn__bar-container">
                    <div className="GraphColumn__bar"
                         style={{height: percentHeight, backgroundColor: this.props.color}}
                    >{this.props.value}</div>
                </div>
                <div className="GraphColumn__label">{this.props.label}</div>
            </div>
        );
    }
}

export default GraphColumn;

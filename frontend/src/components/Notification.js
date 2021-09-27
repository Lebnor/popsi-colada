import React, { Component } from "react";

class Notification extends Component {
    render() {
        return (
            <div className="appear notification is-success is-light level level-item">
                <button
                    className="delete"
                    onClick={this.props.onClick}
                ></button>
                {this.props.message}
            </div>
        );
    }
}

export default Notification;

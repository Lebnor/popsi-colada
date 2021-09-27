import React, { Component } from "react";
import Notification from "../../Notification";

const withSubmit = (WrappedComponent, message) => {
    class WithSubmit extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                submitted: false,
            };
        }
        render() {
            return (
                <div>
                    {this.state.submitted && (
                        <Notification
                            message={message}
                            onClick={() => this.setState({ submitted: false })}
                        />
                    )}
                    <WrappedComponent
                        loggedIn={this.props.loggedIn}
                        submitted={this.state.submitted}
                        submit={() => this.setState({ submitted: true })}
                    />
                </div>
            );
        }
    }

    return WithSubmit;
};

export default withSubmit;

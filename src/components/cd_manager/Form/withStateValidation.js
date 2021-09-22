import React, { Component } from "react";

const withStateValidation = (WrappedComponent, numRequired) => {
    class WithStateValidation extends Component {
        constructor(props) {
            super(props);
            this.state = {
                count: 0,
                valid: false,
            };
        }

        increment() {
            let valid = false;
            if (this.state.count + 1 >= numRequired) valid = true;
            this.setState({
                count: this.state.count + 1,
                valid: valid,
            });
        }

        decrement() {
            let valid = false;
            if (this.state.count - 1 >= numRequired) valid = true;
            this.setState({
                count: this.state.count - 1,
                valid: valid,
            });
        }

        render() {
            return (
                <WrappedComponent
                    valid={this.state.valid}
                    increment={() => this.increment()}
                    decrement={() => this.decrement}
                />
            );
        }
    }
};

export default withStateValidation;

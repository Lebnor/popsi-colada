import React, { Component } from "react";

const withValidation = (WrappedComponent, validation, details) => {
    class WithValidation extends Component {
        constructor(props) {
            super(props);
            this.state = {
                value: false,
                cls: "input is-info",
            };
        }

        onChange(e) {
            this.setState({ value: e.target.value });
            if (validation(e.target.value)) {
                this.setState({ cls: "input is-success" });
                // update the parent with valid value
                this.props.updates(e.target.value);
            } else {
                this.setState({ cls: "input is-danger" });
                this.props.updates(null);
            }
        }

        render() {
            return (
                <div>
                    <WrappedComponent
                        name={this.props.name}
                        onChange={(e) => this.onChange(e)}
                        cls={this.state.cls}
                        {...this.props}
                    />
                    {this.state.cls === "input is-danger" && (
                        <small className="has-text-danger">{details}</small>
                    )}
                </div>
            );
        }
    }

    return WithValidation;
};

export default withValidation;

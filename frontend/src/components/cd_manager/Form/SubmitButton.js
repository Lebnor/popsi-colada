import React, { Component } from "react";

class SubmitButton extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <input
                    className={this.props.className}
                    disabled={this.props.active ? false : true}
                    type="submit"
                    value="submit"
                    onClick={(e) => this.props.onClick(e)}
                ></input>
            </div>
        );
    }
}

export default SubmitButton;

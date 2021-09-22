import React, { Component } from "react";

class ClosableNot extends Component {
    constructor(props) {
        super(props);

        this.myRef = React.createRef();
    }

    close() {
        console.log(this.myRef.current);
        this.myRef.current.remove();
    }
    render() {
        return (
            <div ref={this.myRef}>
                {this.props.submitted && (
                    <div className="notification is-primary level level-item">
                        <button
                            className="delete"
                            onClick={() => this.close()}
                        ></button>
                        Submitted succesfully.
                    </div>
                )}
            </div>
        );
    }
}

export default ClosableNot;

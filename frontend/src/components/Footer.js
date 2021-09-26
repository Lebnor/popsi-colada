import React, { Component } from "react";
import { render } from "react-dom";

export default class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <section className="section" />
                <footer className="footer">
                    <div className="content has-text-centered has-text-primary">
                        <p>
                            This app was made by <strong> Liel</strong>
                        </p>
                        <p>Link to github:</p>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}

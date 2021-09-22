import React, { Component } from "react";
import SingleRecord from "./SingleRecord";

class SideTab extends Component {
    render() {
        return (
            <section className="section has-text-centered">
                <p className="subtitle">
                    Modern CSS framework based on{" "}
                    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">
                        Flexbox
                    </a>
                </p>

                <div className="buttons is-justify-content-center	">
                    <a className="button is-primary">Primary</a>
                    <a className="button is-link">Link</a>
                </div>

                <SingleRecord name="singlerecord" amount={5} />
            </section>
        );
    }
}

export default SideTab;

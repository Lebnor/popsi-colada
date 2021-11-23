import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as FaStarRegular } from "@fortawesome/free-regular-svg-icons";

class Star extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filled: !!this.props.filled,
            animating: "",
        };
    }
    onClick() {
        this.props.onClick();
        this.setState({ filled: !this.state.filled });
    }

    render() {
        return (
            <div
                style={{
                    position: "absolute",
                    top: "0px",
                    right: "5px",
                    width: "32px",
                    height: "32px",
                }}
            >
                <a
                    style={{ color: "yellow" }}
                    className={this.state.animating}
                    onClick={(e) => {
                        e.preventDefault();
                        this.onClick();
                        this.setState({
                            animating: this.state.filled ? "shrink" : "jump",
                        });
                    }}
                >
                    <FontAwesomeIcon
                        size="2x"
                        icon={this.state.filled ? faStar : FaStarRegular}
                    />
                </a>
            </div>
        );
    }
}

export default Star;

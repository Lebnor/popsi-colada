import React, { Component } from "react";

export default class Tabs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeInd: 0,
        };
    }

    setActive(ind) {
        this.setState({ activeInd: ind });
    }

    activeClass(ind) {
        return ind == this.state.activeInd ? "is-active" : "";
    }

    currentActive() {
        return this.state.activeInd;
    }

    render() {
        return (
            <div className="container p-4">
                <div className="tabs is-boxed">
                    <ul>
                        {this.props.tabs &&
                            this.props.tabs.map((item, ind) => {
                                return (
                                    <li
                                        key={ind}
                                        className={this.activeClass(ind)}
                                    >
                                        <a
                                            onClick={() => {
                                                this.setActive(ind);
                                                this.props.updateActiveInd(ind);
                                            }}
                                        >
                                      <span>{item.name}</span>
                                        </a>
                                    </li>
                                );
                            })}
                    </ul>
                </div>
            </div>
        );
    }
}

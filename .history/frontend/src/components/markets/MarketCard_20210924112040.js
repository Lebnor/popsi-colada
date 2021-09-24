import React, { Component } from "react";

class MarketCard extends Component {
    adjustSize(name) {
        if (name.length > 10) return "is-size-3";
        else if (name.length > 20) return "is-size-4";
        else return "is-size-2";
    }
    render() {
        return (
            <a>
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img
                                src={this.props.img}
                                alt={`${this.props.name} image`}
                            />
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div
                                className={
                                    "has-text-primary media-content" +
                                    this.adjustSize(this.props.name)
                                }
                            >
                                {this.props.name}
                            </div>
                        </div>

                        <div className="content">{this.props.description}</div>
                    </div>
                </div>
            </a>
        );
    }
}

export default MarketCard;

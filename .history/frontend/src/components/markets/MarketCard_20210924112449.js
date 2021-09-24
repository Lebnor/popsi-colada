import React, { Component } from "react";

class MarketCard extends Component {
    adjustSize(name) {
        if (name.length > 10) return "is-size-5";
        else return "is-size-2";
    }
    render() {
        return (
            <a>
                <div style={{'width': '20vw'}} className="card box">
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
                                    "has-text-primary media-content " +
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

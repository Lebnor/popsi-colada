import React, { Component } from "react";

class MarketCard extends Component {
    sizeClass(name) {
        if (name.length > 10) return "is-size-5";
        else return "is-size-2";
    }

    adjustSize(name) {
        if (name.length > 15)
            return name.substring(0, 10);
        return name;
    }

    render() {
        return (
            <a>
                <div style={{'minWidth': '10vw'}} className="card box">
                    <div className="card-image">
                        <figure className="image is-small is-128x128">
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
                                    this.sizeClass(this.props.name)
                                }
                            >
                                {this.adjustSize(this.props.name)}
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

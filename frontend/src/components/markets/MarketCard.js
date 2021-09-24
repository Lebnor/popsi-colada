import React, { Component } from "react";

class MarketCard extends Component {
    sizeClass(name) {
        if (name.length > 6) return "is-size-5";
        else return "is-size-2";
    }

    adjustSize(name) {
        if (name.length > 15) return name.substring(0, 11) + "...";
        return name;
    }

    render() {
        return (
            <a>
                <div
                    
                    className="card card-market has-text-centered mx-auto"
                >
                    <div className="card-image">
                        <figure className="image is-centered has-text-centered is-128x128">
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

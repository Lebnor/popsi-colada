import React, { Component } from "react";
import { Link } from "react-router-dom";
import Star from "../Star";

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
            <React.Fragment>
                <div className="card card-market has-text-centered mx-auto">
                    <div className="card-image">
                        <figure className="image mx-auto is-128x128">
                            <Link to={`/market-detail/${this.props.uuid}`}>
                                <img
                                    src={this.props.img}
                                    alt={`${this.props.name} image`}
                                />
                            </Link>
                        </figure>
                        <div
                            style={{
                                position: "absolute",
                                top: "0px",
                                right: "0px",
                                width: "32px",
                                height: "32px",
                            }}
                        >
                            <Star filled={this.props.favorite} />
                        </div>
                    </div>
                    <div className="card-content">
                        <Link to={`/market-detail/${this.props.uuid}`}>
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
                        </Link>
                        <div className="content">{this.props.description}</div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default MarketCard;

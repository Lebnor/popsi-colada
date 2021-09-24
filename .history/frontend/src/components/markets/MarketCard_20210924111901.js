import React, { Component } from "react";

class MarketCard extends Component {

    adjustSize(name) {
        if (name.length > 10)
            return "..."
        return name;
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
                            <div className="is-size-3 has-text-primary media-content">
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

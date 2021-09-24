import React, { Component } from 'react';

class MarketCard extends Component {
    render() {

        return (
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={this.props.img} alt={`${this.props.name} image`} />
                        <img src={this.props.img_field} />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="is-size-2 media-content">{this.props.name}</div>
                    </div>

                    <div className="content">{this.props.description}</div>
                </div>
            </div>
        );
    }
}

export default MarketCard;
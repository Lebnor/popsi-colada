import React, { Component } from "react";
import { Link } from "react-router-dom";

class FoodCard extends Component {
    render() {
        return (
            <>
                <div className="card card-market has-text-centered mx-auto">
                    <div className="card-image">
                        <Link to={`/food-detail/${this.props.uuid}`}>
                            <figure className="image mx-auto is-128x128">
                                <img
                                    src={this.props.img}
                                    alt={`${this.props.name} image`}
                                />
                            </figure>                        </Link>
                    </div>
                    <div className="card-content">
                        <Link
                            to={`/food-detail/${this.props.uuid}`}
                            className="media"
                        >
                            <div className={"has-text-primary media-content "}>
                                {this.props.name}
                            </div>
                        </Link>

                        <div className="content">
                            Available in{" "}
                            {this.props.markets.map((market, ind) => (
                                <Link key={ind} to={`/market-detail/${market.uuid}`}>
                                    {" "}
                                    {market.name} {ind > 0 && ", "}{" "}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default FoodCard;

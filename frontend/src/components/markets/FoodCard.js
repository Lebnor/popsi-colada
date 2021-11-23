import React, { Component } from "react";
import { Link } from "react-router-dom";
import Star from "../Star";
import { addFoodFavorite } from "../utils";

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
                            </figure>{" "}
                        </Link>
                        <Star
                            onClick={() => addFoodFavorite(this.props.uuid)}
                            filled={this.props.is_favorite}
                        />
                    </div>
                    <div className="card-content">
                        <Link
                            to={{
                                pathname: `/food-detail/${this.props.uuid}`,
                                eleg: "xd",
                                query: "hello",
                            }}
                            // to= {`/food-detail/${this.props.uuid}`}
                            className="media"
                        >
                            <div className={"has-text-primary media-content "}>
                                {this.props.name}
                            </div>
                        </Link>
                    </div>
                </div>
            </>
        );
    }
}

export default FoodCard;

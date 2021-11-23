import React, { Component } from "react";
import ColumnView from "../markets/ColumnView";
import FoodCard from "../markets/FoodCard";
import FoodColumnView from "../markets/FoodColumnView";
import MarketCard from "../markets/MarketCard";
import { retrieveFavorites } from "../utils";

class Root extends Component {
    constructor(props) {
        super(props);

        this.state = {
            objects: [],
        };
    }

    componentDidMount() {
        retrieveFavorites((objects) => {
            this.setState({ objects: objects });
        });
    }

    render() {
        const objects = this.state.objects;

        return (
            <>
                {objects.markets && objects.markets.length > 0 && (
                    <div className="container mt-4">
                        <h1 className="text-center has-text-primary is-size-3">Your favorite markets</h1>
                        <ColumnView
                            cols={4}
                            objects={this.state.objects.markets.map(
                                (market) => {
                                    return (
                                        <MarketCard
                                            name={market.name}
                                            description={market.description}
                                            img={market.img}
                                            uuid={market.uuid}
                                            is_favorite={true}
                                        />
                                    );
                                }
                            )}
                        />
                    </div>
                )}
                {objects.foods && objects.foods.length > 0 && (
                    <div className="container">
                        <h1 className="text-center has-text-primary is-size-3">Your favorite foods:</h1>
                        <ColumnView
                            cols={4}
                            objects={this.state.objects.foods.map((food) => {
                                return (
                                    <FoodCard
                                        name={food.name}
                                        img={food.img}
                                        uuid={food.uuid}
                                        is_favorite={true}
                                    />
                                );
                            })}
                        />
                    </div>
                )}

                {objects.foods &&
                    objects.foods.length === 0 &&
                    objects.markets &&
                    objects.markets.length === 0 && (
                        <>
                            <h1>You don't have any favorite items</h1>
                        </>
                    )}
            </>
        );
    }
}

export default Root;

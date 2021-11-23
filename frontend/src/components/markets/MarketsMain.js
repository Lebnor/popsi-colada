import React, { Component } from "react";
import { getMarketsList } from "../utils";
import { getFoodsList } from "../utils";
import ColumnView from "./ColumnView";
import MarketCard from "./MarketCard";
import FoodsView from "./FoodsView";
import withSearch from "../cd_manager/Form/withSearch";
import FoodColumnView from "./FoodColumnView";
import withFavorites from "../cd_manager/Form/withFavorites";

class MarketsMain extends Component {
    constructor(props) {
        super(props);
        
    }

    // fetch list of supermarkets
    componentDidMount() {
        this.props.setSearch(
            history.state && history.state.state
                ? history.state.state.uSearch
                : ""
        );
        getMarketsList((e) => this.setState({ markets: e }));
        getFoodsList((e)=> this.setState({ foods: e}));
    }

    render() {
        return (
            <React.Fragment>
                <div className="container mt-4">
                    <div className="columns is-align-items-center">
                        <h1 className="has-text-primary is-size-3 column is-half">
                            Supermarkets List{" "}
                            <small>({this.props.objects.length} found)</small>
                        </h1>
                        <div className="field-label is-normal">
                            <label className="label">Search:</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <p className="control is-expanded has-icons-left">
                                    <input
                                        className="input is-primary"
                                        type="text"
                                        placeholder="name"
                                        value={this.props.search}
                                        onChange={(e) =>
                                            this.props.setSearch(e.target.value)
                                        }
                                    />
                                </p>
                            </div>
                        </div>
                    </div>

                    <ColumnView
                        cols={4}
                        search={this.props.search}
                        objects={this.props.objects && this.props.objects.map((market) => {
                            return (
                                <MarketCard
                                    name={market.name}
                                    description={market.description}
                                    img={market.img}
                                    uuid={market.uuid}
                                    is_favorite={market.is_favorite}
                                />
                            );
                        })}
                    />

                    <FoodColumnView cols={4} />
                </div>
                <div className="section"></div>
            </React.Fragment>
        );
    }
}

export default  withFavorites(withSearch(MarketsMain, "/api/markets", []));

import React, { Component } from "react";
import { retrieveMarket } from "../utils";
import Food from "./Food";
import withSubmit from "../cd_manager/Form/withSubmit";
class MarketDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            market: "",
            total: 0,
            foods: false,
        };
        this.ls = [];
    }
    componentDidMount() {
        // get last part of url
        let urlArray = window.location.pathname.split("/");
        let uuid = urlArray[urlArray.length - 1];
        retrieveMarket(uuid, (e) =>
            this.setState({
                market: e,
                foods: this.getFoodsList(e),
            })
        );
    }
    getFoodsList(market) {
        return market.foods.map((item, ind) => (
            <Food
                ls={this.ls}
                key={ind}
                callback={(minusplus) =>
                    this.setState({
                        total: Math.max(
                            0,
                            this.state.total + item.price_per_unit * minusplus
                        ),
                    })
                }
                {...item}
                amount={0}
            />
        ));
    }

    render() {
        return (
            <div>
                {this.props.notification}
                <div className="container mt-4">
                    
                <h1 className="has-text-centered has-text-primary is-size-1"> Market detail </h1>
                    <div className="section box">
                        <div className="columns">
                            <p className="column auto">
                                Shopping at{" "}
                                <strong className="is-primary">
                                    {this.state.market.name}
                                </strong>{" "}
                            </p>
                            <p className="column is-offset-2">
                                Total:{" "}
                                <strong className="is-primary">
                                    {" "}
                                    ${this.state.total}
                                </strong>
                            </p>
                            <div className="column auto field level-right">
                                <label> Search: </label>
                                <input className="is-info" type="text"></input>
                            </div>
                        </div>
                        <ul>
                            {this.state.foods &&
                                this.state.foods.map((food, ind) => (
                                    <li key={ind}>{food}</li>
                                ))}
                        </ul>
                    </div>

                    <div className="level level-item">
                        <button
                            onClick={() => {
                                this.props.submit();
                                this.setState({ total: 0 });
                                this.ls.forEach((func) => func(0));
                            }}
                            className="button is-success"
                        >
                            PURCHASE
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withSubmit(MarketDetail, "Thank you for buying");

import React, { Component } from "react";
import { retrieveMarket } from "../utils";

class MarketDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uuid: "",
            market: "",
        };
    }
    componentDidMount() {
        let urlArray = window.location.pathname.split("/");
        // get lasrt part
        let uuid = urlArray[urlArray.length - 1];

        retrieveMarket(uuid, (e) => this.setState({ market: e }));
    }

    render() {
        return (
            <div className="container">
                {this.state.uuid}
                <p>
                    {" "}
                    <strong>Name:</strong> {this.state.market.name}
                </p>
                <p>
                    {" "}
                    <strong>Description:</strong>{" "}
                    {this.state.market.description}
                </p>
                <ul>
                    {this.state.market &&
                        this.state.market.foods.map((item, ind) => {
                            return (
                                <li key={ind}>
                                    <p>
                                        {" "}
                                        {item.name}, {item.units},{" "}
                                        {item.price_per_unit}
                                    </p>
                                </li>
                            );
                        })}
                </ul>
            </div>
        );
    }
}

export default MarketDetail;

import React, { Component } from "react";
import { retrieveMarket } from "../utils";
import Food from "./Food";
import withSubmit from "../cd_manager/Form/withSubmit";
import NavBar from "../nav/NavBar";
class MarketDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uuid: "",
            market: "",
            total: 0,
            foods: false,
        };
        this.ls = [];
        // this.refs = [];
        // this.myRef = React.createRef();
    }
    componentDidMount() {
        let urlArray = window.location.pathname.split("/");
        // get last part
        let uuid = urlArray[urlArray.length - 1];
        retrieveMarket(uuid, (e) =>
            this.setState({
                market: e,
                foods: this.getFoodsList(e),
            })
        );
    }
    getFoodsList(market) {
        return market.foods.map((item) => (
            <Food
                ls={this.ls}
                key={item.id}
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
                <div className="section">
                    <div className="container section box">
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
                                this.state.foods.map((food) => {
                                    // let ref = React.createRef();
                                    // console.log(ref);
                                    return (
                                        <li key={food.id}>
                                            {food}
                                        </li>
                                    );
                                })}
                        </ul>
                    </div>

                    <div className="level level-item">
                        <button
                            onClick={() => {
                                this.props.submit();
                                console.log(this.ls);
                                this.ls.forEach(func => func(0))

                                // window.setTimeout(
                                //     () =>
                                //         (window.location =
                                //             window.location.search),
                                //     2000
                                // );
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

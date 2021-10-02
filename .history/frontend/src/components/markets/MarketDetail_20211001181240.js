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
    }
    componentDidMount() {
        let urlArray = window.location.pathname.split("/");
        // get last part
        let uuid = urlArray[urlArray.length - 1];
        retrieveMarket(uuid, (e) => this.setState({
            market: e,
            foods: e.foods.map((item) => (
                <Food
                    callback={(minusplus) =>
                        this.setState({
                            total: Math.max(
                                0,
                                this.state.total +
                                    item.price_per_unit * minusplus
                            ),
                        })
                    }
                    {...item}
                />
            )),
        }));

    }
    getFoodsList() {
        return this.state.market.foods.map((item) => (
            <Food
                callback={(minusplus) =>
                    this.setState({
                        total: Math.max(
                            0,
                            this.state.total +
                                item.price_per_unit * minusplus
                        ),
                    })
                }
                {...item}
                />
            ));
    }
    // retrieveMarket = (uuid, e) =>
    //     this.setState({
    //         market: e,
    //         foods: e.foods.map((item) => (
    //             <Food
    //                 callback={(minusplus) =>
    //                     this.setState({
    //                         total: Math.max(
    //                             0,
    //                             this.state.total +
    //                                 item.price_per_unit * minusplus
    //                         ),
    //                     })
    //                 }
    //                 {...item}
    //             />
    //         )),
    //     })
    
    

    render() {
        return (
            <div>
                <NavBar
                    userdetails={this.props.userdetails}
                    loggedIn={this.props.loggedIn}
                />
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
                                this.state.foods.map((item) => (
                                    <li key={item.ind}> {item} </li>
                                ))}
                            {/* {this.state.market &&
                                this.state.market.foods.map((item, ind) => {
                                    return (
                                        <li key={ind}>
                                            <Food
                                                food={item}
                                                callback={(minusplus) =>
                                                    this.setState({
                                                        total: Math.max(
                                                            0,
                                                            this.state.total +
                                                                item.price_per_unit *
                                                                    minusplus
                                                        ),
                                                    })
                                                }
                                            />
                                        </li>
                                    );
                                })} */}
                        </ul>
                    </div>

                    <div className="level level-item">
                        <button
                            onClick={() => {
                                this.props.submit();
                                this.setState({ total: 0, foods: this.getFoodsList() });
                                // this.state.foods.forEach((element) => {
                                    // console.log(element);
                                    // element.setAmount(0);
                                // });
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

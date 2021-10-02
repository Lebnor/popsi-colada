import React, { Component } from "react";
import { getMarketsList } from "../utils";
import ColumnView from "./ColumnView";
import NavBar from "../nav/NavBar";
import MarketCard from "./MarketCard";
import FoodsView from "./FoodsView";

class MarketsMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            objects: [],
            search: history.state.state ? history.state.state.uSearch : '',
        };
    }
    validObjects() {
        let validObs = [];
        this.state.objects.map((item) => {
            if (
                item.name.includes(this.state.search) ||
                item.description.includes(this.state.search)
            )
                validObs.push(item);
        });
        return validObs;
    }
    // fetch list of supermarkets
    componentDidMount() {
        getMarketsList((e) => this.setState({ objects: e }));
    }

    render() {
        return (
            <React.Fragment>

                <div className="container mt-4">
                    <div className="columns is-align-items-center">
                        <h1 className="has-text-primary is-size-3 column is-half">
                            Supermarkets List{" "}
                            <small>({this.validObjects().length} found)</small>
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
                                        value={this.state.search}
                                        onChange={(e) =>
                                            this.setState({
                                                search: e.target.value,
                                            })
                                        }
                                    />
                                </p>
                            </div>
                        </div>
                    </div>

                    <ColumnView
                        cols={4}
                        search={this.state.search}
                        objects={this.validObjects().map((item) => (
                            <MarketCard
                                name={item.name}
                                description={item.description}
                                img={item.img}
                                uuid={item.uuid}
                            />
                        ))}
                    />

                

                </div>
                <div className="section"></div>
            </React.Fragment>
        );
    }
}

export default MarketsMain;

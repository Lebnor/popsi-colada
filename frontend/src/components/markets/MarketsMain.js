import React, { Component } from "react";
import { getMarketsList } from "../utils";
import ColumnView from "./ColumnView";

class MarketsMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            objects: [],
            search: "",
        };
    }

    // fetch list of supermarkets and update status
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
                            <small>({this.state.objects.length} found)</small>
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
                                        placeholder="Name"
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
                        objects={this.state.objects}
                    />
                </div>
                <div className="section"></div>
            </React.Fragment>
        );
    }
}

export default MarketsMain;

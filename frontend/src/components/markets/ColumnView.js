import React, { Component } from "react";
import { Link } from "react-router-dom";
import MarketCard from "./MarketCard";

class ColumnView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: this.props.search,
        };
    }

    render() {
        return (
            <div className="columns">
                {[...Array(this.props.cols)].map((x, colInd) => (
                    <div key={colInd} className="column auto">
                        <ul className="">
                            {this.props.objects &&
                                this.props.objects.map((item, ind) => (
                                    <li className="my-4" key={ind}>
                                        {ind % this.props.cols === colInd && item}
                                    </li>
                                ))}
                        </ul>
                    </div>
                ))}
            </div>
        );
    }
}

export default ColumnView;

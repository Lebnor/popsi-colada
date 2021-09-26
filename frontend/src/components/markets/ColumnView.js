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
    validObjects() {
        let validObs = [];
        this.props.objects.map((item) => {
            if (
                item.name.includes(this.props.search) ||
                item.description.includes(this.props.search)
            )
                validObs.push(item);
        });
        return validObs;
    }
    render() {
        return (
            <div className="columns">
                {[...Array(this.props.cols)].map((x, colInd) => (
                    <div key={colInd} className="column auto">
                        <ul className="">
                            {this.props.objects &&
                                this.validObjects().map((item, ind) => (
                                    <li className="my-4" key={ind}>
                                        <Link
                                            to={`market-detail/${item.uuid}`}
                                        >
                                            {ind % 4 === colInd && (
                                                <MarketCard
                                                    img_field={item.img_field}
                                                    name={item.name}
                                                    description={
                                                        item.description
                                                    }
                                                    img={item.img}
                                                />
                                            )}
                                        </Link>
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

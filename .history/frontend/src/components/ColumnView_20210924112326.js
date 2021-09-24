import React, { Component } from "react";
import MarketCard from "./markets/MarketCard";

class ColumnView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
        };
    }
    validObjects() {
        let validObs = [];
        this.props.objects.map((item) => {
            if (
                item.name.includes(this.state.search) ||
                item.description.includes(this.state.search)
            )
                validObs.push(item);
        });
        return validObs;
    }
    render() {
        return (
            <div className="columns">
                {[...Array(5)].map((x, colInd) => (
                    <div key={colInd} className="column">
                        <ul className="">
                            {this.props.objects &&
                                this.validObjects().map((item, ind) => (
                                    <li className="mt-4" key={ind}>
                                        {ind % 4 === colInd && (
                                            <MarketCard
                                                img_field={item.img_field}
                                                name={item.name}
                                                description={item.description}
                                                img={item.img}
                                            />
                                        )}
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

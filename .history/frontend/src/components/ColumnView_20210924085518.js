import React, { Component } from "react";

class ColumnView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
        };
    }
    validObjects() {
        validObs = [];
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
                {[...Array(4)].map((x, colInd) => (
                    <div key={colInd} className="column auto">
                        <ul className="">
                            {this.props.objects &&
                                validObjects().map((item, ind) => (
                                    <li className="mt-4" key={ind}>
                                        {ind % 4 === colInd && item}
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

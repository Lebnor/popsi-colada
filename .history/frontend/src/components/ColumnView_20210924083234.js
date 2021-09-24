import React, { Component } from "react";

class ColumnView extends Component {
    render() {
        return (
            <div className="columns">
                {[...Array(4)].map((x, colInd) => (
                    <div key={colInd} className="column auto">
                        <ul>
                            {this.props.objects &&
                                this.props.objects.map((item, ind) => (
                                    <li key={ind}>
                                        {(ind + 1) % 4 === colInd + 1 && item}
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

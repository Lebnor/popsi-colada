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
                                    <li className="mt-4" key={ind}>
                                        {(ind ) % 4 === colInd && item}
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

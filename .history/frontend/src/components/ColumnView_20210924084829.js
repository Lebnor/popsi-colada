import React, { Component } from "react";

class ColumnView extends Component {
    render() {
        return (
            <div className="columns">
                {[...Array(4)].map((x, colInd) => (
                    <div key={colInd} className="column auto">
                        <ul className="mt-0 mb-0">
                            {this.props.objects &&
                                this.props.objects.map((item, ind) => (
                                    <li className="mb-4" key={ind}>
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
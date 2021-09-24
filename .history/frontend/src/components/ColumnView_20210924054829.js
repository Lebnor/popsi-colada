import React, { Component } from "react";

class ColumnView extends Component {
    render() {
        return (
            <div className="columns">
                <ul>
                    {Array(this.props.cols).map((item, ind) => {
                        return <li key={ind}>{this.props.objects[ind]}</li>;
                    })}
                </ul>
            </div>
        );
    }
}

export default ColumnView;

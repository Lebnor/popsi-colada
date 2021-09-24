import React, { Component } from "react";

class ColumnView extends Component {
    render() {
        return (
            <div className="columns">
                <ul>
                    <li className="column" key={ind}>
                        {this.props.objects[ind]}
                    </li>
                    ;
                </ul>
            </div>
        );
    }
}

export default ColumnView;

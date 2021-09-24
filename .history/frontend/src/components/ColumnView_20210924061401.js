import React, { Component } from "react";

class ColumnView extends Component {
    render() {
        return (
            <div className="columns">
                <ul>
                    <li className="column">
                        {this.props.objects[0]}
                    </li>
                    ;
                </ul>
            </div>
        );
    }
}

export default ColumnView;

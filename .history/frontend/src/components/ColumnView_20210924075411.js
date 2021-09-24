import React, { Component } from "react";

class ColumnView extends Component {
    render() {
        return (
            <div className="">
                <ul className="column-4">
                    {this.props.objects &&
                        this.props.objects.map((item, ind) => {
                            return <li> {item} </li>;
                        })}
                </ul>
            </div>
        );
    }
}

export default ColumnView;

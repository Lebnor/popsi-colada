import React, { Component } from "react";

class ColumnView extends Component {
    render() {
        return (
            <div className="columns">
                <div className="column auto">
                    {this.props.objects &&
                        this.props.objects.map((item, ind) => {
                            {
                                ind + (1 % 4) == 1 && item;
                            }
                        })}
                </div>

                <div className="column auto">
                    {this.props.objects &&
                        this.props.objects.map((item, ind) => {
                            {
                                ind + (1 % 4) == 2 && item;
                            }
                        })}
                </div>

                <div className="column auto">
                    {this.props.objects &&
                        this.props.objects.map((item, ind) => {
                            {
                                ind + (1 % 4) == 3 && item;
                            }
                        })}
                </div>

                <div className="column auto">
                    {this.props.objects &&
                        this.props.objects.map((item, ind) => {
                            {
                                ind + (1 % 4) == 0 && item;
                            }
                        })}
                </div>

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

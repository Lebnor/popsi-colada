import React, { Component } from "react";

class Food extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 0,
        };
    }
    updateAmount(increment) {
        if (this.state.amount + increment >= 0) {
            this.setState({
                amount: Math.max(0, this.state.amount + increment),
            });

            this.props.callback(increment);
        }
    }
    render() {
        const { namew, price_per_unit } = this.props
        return (
            <div className="level border">
                <p>
                    <strong>{name}</strong>, $
                    {this.props.food.price_per_unit} per unit
                </p>
                <div className="level-right buttons">
                    <p className="level-item"> x {this.state.amount} </p>
                    <button
                        className="level-item"
                        onClick={() => this.updateAmount(-1)}
                        className="button is-outline"
                    >
                        -
                    </button>
                    <button
                        className="level-item"
                        onClick={() => this.updateAmount(1)}
                        className="button"
                    >
                        +
                    </button>
                </div>
            </div>
        );
    }
}

export default Food;

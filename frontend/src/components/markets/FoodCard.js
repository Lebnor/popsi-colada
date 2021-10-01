import React, { Component } from 'react';

class FoodCard extends Component {
    render() {
        return (
            <div>
                food yum {this.props.id}
            </div>
        );
    }
}

export default FoodCard;
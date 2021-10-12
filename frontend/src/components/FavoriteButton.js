import React, { Component } from 'react';
import Star from './Star';

class FavoriteButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clicked: false,
        }

    }
    render() {
        return (
            <>
                <a>
                    <Star filled={this.props.isFavorite} />
                </a>
            </>
        );
    }
}

export default FavoriteButton;
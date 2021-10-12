import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as FaStarRegular } from "@fortawesome/free-regular-svg-icons";


class Star extends Component {
    render() {
        return this.props.filled ? (
            <>
            <FontAwesomeIcon style={{color: 'yellow'}} icon={faStar} />
            <FontAwesomeIconRegular style={{color: 'yellow'}} icon={FaStarRegular} />
                <FontAwesomeIcon icon={["far", "fa-star"]} />
                <FontAwesomeIcon icon={["fab", "microsoft"]} />
                <FontAwesomeIcon icon={["fab", "google"]} />
            </>
        ) : (
            <FontAwesomeIcon icon={["far", "coffee"]} />
        );
    }
}

export default Star;

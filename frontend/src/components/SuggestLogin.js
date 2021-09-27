import React, { Component } from "react";
import { Link } from "react-router-dom";

class SuggestLogin extends Component {
    render() {
        return (
            <div>
                <p>
                    You need to
                    <Link to="/api/login"> Login </Link>
                    or
                    <Link to="/api/register"> register </Link>
                    to view this page
                </p>
            </div>
        );
    }
}

export default SuggestLogin;

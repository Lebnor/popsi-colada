import React, { Component } from "react";
import { Link } from "react-router-dom";

class SuggestLogin extends Component {
    render() {
        return (
            <div>
                <p>
                    You need to
                    <a href="/api/login/"> Login </a>
                    or
                    <a href="/api/register/"> register </a>
                    to view this page
                </p>
            </div>
        );
    }
}

export default SuggestLogin;

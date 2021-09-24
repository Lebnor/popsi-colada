import React, { Component } from "react";

class ProfileIcon extends Component {
    render() {
        return (
            <div className="dropdown">
                <div className="dropdown-trigger">
                    <button
                        className="button"
                        aria-haspopup="true"
                        aria-controls="dropdown-menu2"
                    >
                        <span>Content</span>
                        <span className="icon is-small">
                            <i
                                className="fas fa-angle-down"
                                aria-hidden="true"
                            ></i>
                        </span>
                    </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu2" role="menu">
                    <div className="dropdown-content">
                        <a href="#" class="dropdown-item">
                            This is a link
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileIcon;

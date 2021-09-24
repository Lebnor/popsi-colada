import React, { Component } from "react";
import { AiOutlineUser } from "react-icons/ai";

class ProfileIcon extends Component {
    render() {
        return (
            <div className="prof-icon dropdown">
                <div
                    className="level has-text-white dropdown-trigger"
                    aria-haspopup="true"
                    aria-controls="dropdown-menu2"
                >
                    <div className="icon-container">
                        <AiOutlineUser color="black" size="32" />
                    </div>
                    {"    "}

                    <div className="dropdown">
                        <div className="dropdown-trigger">
                            <button
                                className="button"
                                aria-haspopup="true"
                                aria-controls="dropdown-menu"
                            >
                                <span>Dropdown button</span>
                                <span className="icon is-small">
                                    <i
                                        className="fas fa-angle-down"
                                        aria-hidden="true"
                                    ></i>
                                </span>
                            </button>
                        </div>
                        <div
                            className="dropdown-menu"
                            id="dropdown-menu"
                            role="menu"
                        >
                            <div className="dropdown-content">
                                <a href="#" className="dropdown-item">
                                    Dropdown item
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileIcon;

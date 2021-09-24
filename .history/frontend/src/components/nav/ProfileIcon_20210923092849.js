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
                            <span
                                className=""
                                aria-haspopup="true"
                                aria-controls="dropdown-menu2"
                            >
                                <span>
                                    {this.props.userdetails
                                        ? this.props.userdetails.username
                                        : "Anonymous"}
                                </span>
                                <span className="icon is-small">
                                    <i
                                        className="fas fa-angle-down"
                                        aria-hidden="true"
                                    ></i>
                                </span>
                            </span>
                        </div>
                        <div
                            className="dropdown-menu"
                            id="dropdown-menu2"
                            role="menu"
                        >
                            <div className="dropdown-content">
                                <a href="#" class="dropdown-item">
                                    This is a link
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

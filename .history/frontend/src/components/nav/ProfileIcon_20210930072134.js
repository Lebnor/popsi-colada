import React, { Component } from "react";
import { AiOutlineUser } from "react-icons/ai";

class ProfileIcon extends Component {
    render() {
        return (
            <div className="prof-icon dropdown">
                <div
                    className="mb-2 mx-4 nav-list is-align-items-center has-text-white dropdown-trigger"
                    aria-haspopup="true"
                    aria-controls="dropdown-menu2"
                >
                    <div className="icon-container">
                        <AiOutlineUser color="black" size="32" />
                    </div>
                    <div>
                        {"    "}
                        {this.props.userdetails &&
                            this.props.userdetails.username}
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileIcon;

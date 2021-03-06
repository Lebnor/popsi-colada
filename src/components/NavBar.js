import React, { Component } from "react";
import { register } from "./utils";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    NavLink,
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeInd: this.props.activeInd,
        };
    }

    getLinkClass(ind) {
        let linkClass = "navbar-item ";
        if (ind === this.state.activeInd) {
            linkClass += " active is-active";
        }
        "Class for this elem is " + linkClass;
        return linkClass;
    }

    render() {
        return (
            <nav
                className="navbar is-narrow"
                role="navigation"
                aria-label="main navigation"
            >
                <div className="column is-offset-1 is-quarter navbar-brand nav-img ">
                    <a className="is-narrow" href="/">
                        <img
                            className=""
                            width="220px"
                            height="77px"
                            src="../static/popsi colada.jpg"
                            alt="brand logo"
                        />
                    </a>

                    <a
                        role="button"
                        className="navbar-burger has-text-white is-narrow nav-btn"
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbarBasicExample"
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div
                    id="navbarBasicExample"
                    className="navbar-menu has-text-centered is-align-items-center"
                >
                    <div className="navbar-start">
                        <Link
                            onClick={() =>
                                this.setState({
                                    activeInd: 0,
                                })
                            }
                            className={this.getLinkClass(0)}
                            to="/"
                        >
                            Home
                        </Link>

                        <Link
                            onClick={() =>
                                this.setState({
                                    activeInd: 1,
                                })
                            }
                            className={this.getLinkClass(1)}
                            to="/about"
                        >
                            About
                        </Link>
                        <Link
                            onClick={() =>
                                this.setState({
                                    activeInd: 2,
                                })
                            }
                            className={this.getLinkClass(2)}
                            to="/users"
                        >
                            Users
                        </Link>
                    </div>

                    <div className="column is-offset-5 navbar-end">
                        <div className="navbar-item">
                            <div className="buttons is-justify-content-center">
                                <button className="button is-danger is-rounded">
                                    <span>
                                        <FontAwesomeIcon icon={faUserCircle}/>
                                        user
                                        </span>
                                </button>

                                {!this.props.loggedIn && (
                                    <a
                                        href="api/register"
                                        className="button is-success"
                                    >
                                        Register
                                    </a>
                                )}

                                {!this.props.loggedIn && (
                                    <a
                                        href="api/login"
                                        className="button is-light"
                                    >
                                        {" "}
                                        Log In{" "}
                                    </a>
                                )}
                                {this.props.loggedIn && (
                                    <a
                                        href="api/logout"
                                        className="button is-light"
                                    >
                                        {" "}
                                        Log Out
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;

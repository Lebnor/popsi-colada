import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import ProfileIcon from "./ProfileIcon";

const MyNavBar = ({ loggedIn, userdetails }) => {
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
                    <NavLink
                        className="navbar-item"
                        activeClassName="is-active"
                        isActive={() => {
                            if (!location) return false;
                            const { pathname } = location;
                            return pathname === "/";
                        }}
                        to="/"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        className="navbar-item"
                        activeClassName="is-active"
                        to="/browse"
                    >
                        Browse
                    </NavLink>
                    <NavLink
                        className="navbar-item"
                        activeClassName="is-active"
                        to="/favorite"
                    >
                        Favorites
                    </NavLink>
                    <NavLink
                        className="navbar-item"
                        activeClassName="is-active"
                        to="/cds"
                    >
                        CD's
                    </NavLink>
                </div>

                <div className="column is-offset-5 navbar-end">
                    <div className="navbar-item">
                        <div className="buttons is-justify-content-center">
                            <ProfileIcon loggedIn={loggedIn} userdetails={userdetails} />

                            {!loggedIn && (
                                <a
                                    href="/api/register/"
                                    className="button is-success"
                                >
                                    Register
                                </a>
                            )}

                            {!loggedIn && (
                                <a
                                    href="/api/login/"
                                    className="button is-light"
                                >
                                    {" "}
                                    Log In{" "}
                                </a>
                            )}
                            {loggedIn && (
                                <a
                                    href="/api/logout"
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
};

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeInd: this.props.activeInd,
        };
    }

    getLinkClass(ind) {
        let linkClass = "navbar-item ";
        if (ind === "" && window.location.pathname === "/") {
            linkClass += " is-active";
        }

        if (ind !== "" && window.location.pathname.startsWith(`/${ind}`)) {
            linkClass += " is-active";
        }

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
                            className={this.getLinkClass("")}
                            to="/"
                        >
                            Home
                        </Link>
                        <Link
                            onClick={() =>
                                this.setState({
                                    activeInd: 2,
                                })
                            }
                            className={this.getLinkClass("market")}
                            to="/markets"
                        >
                            Markets
                        </Link>

                        <Link
                            onClick={() =>
                                this.setState({
                                    activeInd: 1,
                                })
                            }
                            className={this.getLinkClass("cds")}
                            to="/cds"
                        >
                            CD's
                        </Link>
                    </div>

                    <div className="column is-offset-5 navbar-end">
                        <div className="navbar-item">
                            <div className="buttons is-justify-content-center">
                                <ProfileIcon {...this.props} />

                                {!this.props.loggedIn && (
                                    <a
                                        href="/api/register"
                                        className="button is-success"
                                    >
                                        Register
                                    </a>
                                )}

                                {!this.props.loggedIn && (
                                    <a
                                        href="/api/login"
                                        className="button is-light"
                                    >
                                        {" "}
                                        Log In{" "}
                                    </a>
                                )}
                                {this.props.loggedIn && (
                                    <a
                                        href="/api/logout"
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
document.addEventListener("DOMContentLoaded", () => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
        document.querySelectorAll(".navbar-burger"),
        0
    );

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
        // Add a click event on each of them
        $navbarBurgers.forEach((el) => {
            el.addEventListener("click", () => {
                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle("is-active");
                $target.classList.toggle("is-active");
            });
        });
    }
});

export default MyNavBar;

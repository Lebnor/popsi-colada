import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <div className="">
                    <div className="column is-offset-1 is-3 has-text-primary is-size-1">
                        <span className="hero-main">Food</span>
                        <p className="hero-secondary">Discover great food</p>

                        <div className="home-search nav-list">
                            <input
                                id="home-search"
                                placeholder="Search market, Food"
                                className="home-search-input level-item"
                            ></input>
                            <Link
                                to={{
                                    pathname: "/users/",
                                    search: document.getElementById(
                                        "home-search"
                                    ).value,
                                }}
                                className="button is-danger is-justify-content-center"
                            >
                                GO
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;

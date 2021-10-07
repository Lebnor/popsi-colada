import React, { Component } from "react";
import { Link, NavLink, Redirect } from "react-router-dom";
import NavBar from "../nav/NavBar";
import GetNotified from "./GetNotified";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
        };
    }

    render() {
        if (this.state.redirect)
            return (
                <Redirect
                    to={{
                        pathname: `/markets`,
                        state: {
                            uSearch: this.state.search,
                        },

                        //, userSearch: this.state.search,
                    }}
                ></Redirect>
            );
        return (
            <React.Fragment>
                <div className="home-container">
                    <div className="">
                        <div className="column is-offset-1 is-3 has-text-primary is-size-1">
                            <span className="hero-main">Food</span>
                            <p className="hero-secondary">
                                Discover great food
                            </p>

                            <div className="home-search nav-list">
                                <input
                                    onChange={(e) =>
                                        this.setState({
                                            search: e.target.value,
                                        })
                                    }
                                    value={this.state.search}
                                    placeholder="Search a market"
                                    className="home-search-input level-item"
                                ></input>

                                <NavLink 
                                to={{
                                    pathname: `/markets`,
                                    state: {
                                        uSearch: this.state.search,
                                    },
            
                                }}
                                activeClassName="home-search-button"
                                >
                                    GO
                                </NavK>
                                {/* <button
                                    className="home-search-button"
                                    onClick={() =>
                                        this.setState({ redirect: true })
                                    }
                                >
                                    GO
                                </button> */}
                            </div>
                        </div>
                    </div>
                </div>

                <GetNotified />
            </React.Fragment>
        );
    }
}

export default Home;

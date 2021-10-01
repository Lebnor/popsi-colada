import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import NavBar from "../nav/NavBar";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
        };
    }
    render() {
        return (
            <React.Fragment>
                <NavBar
                    userdetails={this.props.userdetails}
                    loggedIn={this.props.loggedIn}
                />
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
                                    placeholder="Search market, Food"
                                    className="home-search-input level-item"
                                ></input>

                                <NavLink
                                    to={{
                                        pathname: `/markets`,
                                        userSearch: this.state.search,
                                    }}
                                    isActive={() => true}
                                    activeClassName="home-search-button"
                                >
                                    GO
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="x123" className="section"></div>
            </React.Fragment>
        );
    }
}

export default Home;

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
                                    placeholder="Search food, market"
                                    className="home-search-input level-item"
                                ></input>

                                <NavLink
                    
                                    to={{
                                        pathname: `/browse`,
                                        state: {
                                            uSearch: this.state.search,
                                        },
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

                <GetNotified />
            </React.Fragment>
        );
    }
}

export default Home;

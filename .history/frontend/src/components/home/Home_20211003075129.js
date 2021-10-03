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
                                        state: { uSearch: this.state.search },
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

                <section className="pt-6 mt-6 pb-6 mb-6 get-notified">
                    <div className="section">
                        <div className="has-text-centered">
                            <h1 className="has-text-primary is-size-4">
                                Get notified
                            </h1>
                            <h1 className="has-text-primary is-size-4">
                                about new products
                            </h1>
                            <br />
                            <p className="is-size-6">
                                Sint magna ullamco anim dolore in ullamco ipsum
                                esse
                            </p>
                            <p className="is-size-6">
                                 cillum dolor.
                            </p>
                            <br />
                            <div className="mx-auto home-search nav-list">
                                <input
                                    placeholder="E-mail"
                                    className="home-search-input level-item"
                                ></input>

                                <a
                                    
                                    className="button is-danger is-text is-rounded"
                                >
                                    "->"
                                </a>
                            </div>
                            <br />
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Home;

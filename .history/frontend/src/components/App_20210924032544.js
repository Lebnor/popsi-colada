import { hot } from "react-hot-loader/root";

import React, { Component } from "react";
import { render } from "react-dom";
import CdManagerPage from "./cd_manager/cds/CdManagerPage";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./nav/NavBar";
import Register from "./Register";
import Home from "./cd_manager/home/Home";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Router>
                    <div>
                        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                        <Switch>
                            <Route path="/register">
                                <Register />
                            </Route>
                            <Route path="/cds">
                                <NavBar
                                    activeInd={1}
                                    userdetails={this.props.userdetails}
                                    loggedIn={this.props.loggedIn}
                                />

                                <CdManagerPage
                                    navBar={this.navBar}
                                    userdetails={this.props.userdetails}
                                    loggedIn={this.props.loggedIn}
                                />
                            </Route>
                            <Route path="/users">
                                <NavBar
                                    activeInd={2}
                                    userdetails={this.props.userdetails}
                                    loggedIn={this.props.loggedIn}
                                />
                            </Route>
                            <Route path="/">
                                <NavBar
                                    activeInd={0}
                                    userdetails={this.props.userdetails}
                                    loggedIn={this.props.loggedIn}
                                />
                                
                                <Home />
                            </Route>
                        </Switch>
                    </div>

                    <Footer
                        className="section"
                        footer-color="false"
                        footer-padding="6rem"
                    />
                </Router>
            </div>
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
const loggedIn = document.getElementById("app");
const notLoggedIn = document.getElementById("app-not-authenticated");

fetch("api/users/")
    .then((response) => response.json())
    .then((res) => {
        console.log(res);
        render(<App userdetails={res} loggedIn={true} />, loggedIn);
    })
    .catch((err) => console.log(err));

if (loggedIn) {
    render(<App loggedIn={true} />, loggedIn);
} else {
    render(<App loggedIn={false} />, notLoggedIn);
}

export default hot(App);

import { hot } from "react-hot-loader/root";

import React, { Component } from "react";
import { render } from "react-dom";
import CdManagerPage from "./cd_manager/cds/CdManagerPage";
import Footer from "./Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./nav/NavBar";
import Register from "./Register";
import Home from "./home/Home";
import MarketsMain from "./markets/MarketsMain";
import MarketDetail from "./markets/MarketDetail";
class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Route path="/register" component={Register}></Route>
                    <Route path="/cds">
                        <CdManagerPage
                            userdetails={this.props.userdetails}
                            loggedIn={this.props.loggedIn}
                        />
                    </Route>
                    <Route path="/markets">
                        <MarketsMain value={this.props.value} {...this.props} />
                    </Route>
                    <Route path="/markets/:search">
                        <MarketsMain {...this.props} />
                    </Route>
                    <Route
                        path="/market-detail/:uuid"
                        // render={() => <MarketDetail {...this.props} />}
                    >
                        <MarketDetail
                            userdetails={this.props.userdetails}
                            {...this.props}
                        />
                    </Route>
                    <Route
                        exact
                        path="/"
                        render={() => <Home {...this.props} />}
                    ></Route>
                </BrowserRouter>
                <Footer
                    className="section"
                    footer-color="false"
                    footer-padding="6rem"
                />
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

fetch("/api/users/")
    .then((response) => response.json())
    .then((res) => {
        render(<App userdetails={res.username} loggedIn={true} />, loggedIn);
    })
    .catch((err) => console.log(err));

if (loggedIn) {
    render(<App loggedIn={true} />, loggedIn);
} else {
    render(<App loggedIn={false} />, notLoggedIn);
}

export default hot(App);

import { hot } from "react-hot-loader/root";

import React, { Component } from "react";
import { render } from "react-dom";
import CdManagerPage from "./cd_manager/cds/CdManagerPage";
import Footer from "./Footer";
import { BrowserRouter, Route, Link } from "react-router-dom";
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
                    <Route
                        path="/markets"
                        props={{ ...this.props }}
                        render={() => <MarketsMain {...this.props} />}
                    ></Route>
                    <Route path="/markets/:search" component={MarketsMain} />
                    <Route
                        path="/market-detail/:uuid"
                        render={() => <MarketDetail />}
                    ></Route>
                    <Route
                        exact
                        path="/"
                        render={() => <Home {...this.props} />}
                    ></Route>

                    <Footer
                        className="section"
                        footer-color="false"
                        footer-padding="6rem"
                    />
                </BrowserRouter>
            </div>
        );
    }
}

const loggedIn = document.getElementById("app");
const notLoggedIn = document.getElementById("app-not-authenticated");

fetch("/api/users/")
    .then((response) => response.json())
    .then((res) => {
        render(<App userdetails={res} loggedIn={true} />, loggedIn);
    })
    .catch((err) => console.log(err));

if (loggedIn) {
    render(<App loggedIn={true} />, loggedIn);
} else {
    render(<App loggedIn={false} />, notLoggedIn);
}

export default hot(App);

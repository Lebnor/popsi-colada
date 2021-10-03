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
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            alert("changed");
        }
    }
  
    render() {
        return (
            <div>
                <BrowserRouter onChange={()=>alert('changed')}>
                    <NavBar {...this.props} />
                    <Route  path="/register" component={Register}></Route>
                    <Route onChange={()=>alert('changed')} path="/cds">
                        <CdManagerPage
                            userdetails={this.props.userdetails}
                            loggedIn={this.props.loggedIn}
                        />
                    </Route>
                    <Route onChange={()=>alert('changed')} path="/markets">
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

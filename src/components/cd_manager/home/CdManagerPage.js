import React, { Component } from "react";
import Tabs from "./Tabs";
import MainTab from "./MainTab";
import { getList } from "../../utils";
import CreateRecord from "./CreateTab";
import SearchTab from "./SearchTab";

export default class CdManagerPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            objects: [],
            activeInd: 0,
        };
        document.title = "CD manager - home"

        getList((e) => this.setState({ objects: e }));
    }
    setActiveInd(ind) {
        this.setState({ activeInd: ind });
    }

    render() {
      
      this.tabs = [
        {
            active: false,
            name: "Main",
            content: (
                <MainTab
                    objects={this.state.objects}
                    loggedIn={this.props.loggedIn}
                    name="Main"
                />
            ),
        },
        {
            active: false,
            name: "Insert",
            content: <CreateRecord loggedIn={this.props.loggedIn} />,
        },
        {
            active: true,
            name: "Search",
            // content: <SideTab loggedIn={this.props.loggedIn} name="Credits"/>
            content: (
                <SearchTab loggedIn={this.props.loggedIn} name="Search">

                </SearchTab>
            ),
        },
    ];

        return (
            <div>
                <div className="container">
                    <Tabs
                        updateActiveInd={(ind) => this.setActiveInd(ind)}
                        tabs={this.tabs}
                    />

                    {this.tabs[this.state.activeInd].content}
                </div>

                <div className="section"> </div>
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

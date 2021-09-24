import React, { Component } from "react";

class Home extends Component {
    render() {
        return (
            // <div className="columns">
            //     <div className="column is-three-quarters main">
            //         main
            //     </div>
            //     <div className="column auto right-side">
            //         <div className="has-text-centered">
            //             <button className="is-circle"> </button>
            //             <p>Minim magna eiusmod adipisicing tempor consectetur non pariatur.</p>
            //         </div>

            //     </div>
            // </div>
            <div className="home-container">
                <div className="">
                    <div className="column is-offset-1 is-3 has-text-primary is-size-1">
                        <span className="hero-main">Food</span>
                        <p className="hero-secondary">Discover great food</p>

                        <div className="home-search nav-list">
                            <input
                                placeholder="Search market, Food"
                                className="home-search-input level-item"
                            ></input>
                            <button className="button is-danger is-justify-content-center">
                                GO
                            </button>
                        </div>

                    </div>
              

                </div>
            </div>
        );
    }
}

export default Home;

import React, { Component } from "react";

class GetNotified extends Component {
    render() {
        return (
            <section className="pt-6 get-notified">
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
                            Sint magna ullamco anim dolore in ullamco ipsum esse
                        </p>
                        <p className="is-size-6">cillum dolor.</p>
                        <br />
                        <div className="mx-auto home-search nav-list">
                            <input
                                placeholder="E-mail"
                                className="home-search-input level-item"
                            ></input>

                            <button className="button is-danger is-rounded circle">
                                >
                            </button>
                        </div>
                        <br />
                    </div>
                </div>
            </section>
        );
    }
}

export default GetNotified;

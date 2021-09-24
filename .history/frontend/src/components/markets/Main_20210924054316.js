import React, { Component } from "react";

class Main extends Component {
    constructor(props) {
        super(props);

        // fetch list of supermarkets
    }

    getObjects() {
        return (
            <ul>
                {this.state.objects &&
                    this.state.objects.map((item, ind) => {
                        return (
                            <li key={ind}>
                                <div class="card">
                                    <div class="card-image">
                                        <figure class="image is-4by3">
                                            <img
                                                src={item.img}
                                                alt={`${item.name} image`}
                                            />
                                        </figure>
                                    </div>
                                    <div class="card-content">
                                        <div class="media">
                                            <div class="media-content">
                                                {item.name}
                                            </div>
                                        </div>

                                        <div class="content">
                                            {item.description}
                                        </div>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
            </ul>
        );
    }
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <header>
                        <h1 className="has-text-primary is-size-5">
                            Supermakets List
                        </h1>

                        <ColumnView objects={this.getObjects()} />
                    </header>
                </div>
            </React.Fragment>
        );
    }
}

export default Main;

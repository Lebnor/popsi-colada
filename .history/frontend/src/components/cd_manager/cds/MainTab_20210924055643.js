import React, { Component } from "react";
import RecordsTab from "./RecordsList";
import { getCdList } from "../../utils";
import ReactPaginate from "react-paginate";
import SingleRecord from "./SingleRecord";
import SuggestLogin from "../../SuggestLogin";

class MainTab extends Component {
    constructor(props) {
        super(props);

        this.state = {
            objects: this.props.objects,
            fetchLoading: false,
        };
    }
    setSelected(item) {
        this.setState({ selectedItem: item });
    }
    fetchButtonClass() {
        let cls = "button has-text-link is-rounded is-left is-inline ";
        if (this.state.fetchLoading) {
            cls += " is-loading";
        }
        return cls;
    }
    totalCopies() {
        let total = 0;
        for (let item of this.current()) {
            total += item.amount;
        }
        return total;
    }
    current() {
        return this.state.objects.length === 0
            ? this.props.objects
            : this.state.objects;
    }
    totalObjects() {
        return this.current().length;
    }
    render() {
        return (
            <section className="">
                <h1 className="has-text-primary is-size-3"> Records List</h1>
                <div className="box">
                    <header className="notification is-primary level is-align-items-center	">
                        <button
                            className={this.fetchButtonClass()}
                            onClick={() => {
                                this.setState({ loading: true });
                                this.props.loggedIn &&
                                    getCdList((e) =>
                                        this.setState({ objects: e })
                                    );
                            }}
                        >
                            fetch
                        </button>
                        <div className="level-item has-text-center">
                            <h1 className="has-text-center">
                                List of all cd's{" "}
                                {this.props.objects && (
                                    <span>
                                        {" "}
                                        ({this.totalObjects()} in total)
                                    </span>
                                )}
                            </h1>
                        </div>

                        <button className="button has-text-link is-rounded is-primary is-inverted">
                            +Add
                        </button>
                    </header>

                    {this.props.loggedIn ? (
                        <section className="columns is-align-content-center">
                            <div className="column">
                                <RecordsTab
                                    setSelectedRecord={(item) =>
                                        this.setSelected(item)
                                    }
                                    objects={this.current()}
                                />
                            </div>

                            <div className="column">
                                <SingleRecord cd={this.state.selectedItem} />
                            </div>
                        </section>
                    ) : (
                        // not logged in
                        <SuggestLogin />
                    )}
                </div>
                {this.props.loggedIn && this.props.objects.length > 0 && (
                    <>
                    <h1 className="has-text-primary is-size-3">Details</h1>
                    <section className="section level level-item box">
                        
                        <div className="">
                           
                            <p>
                                You have a total of{" "}
                                <strong className="has-text-primary">
                                    {this.totalObjects()}
                                </strong>{" "}
                                entries{" "}
                            </p>
                            <p>
                                {" "}
                                and{" "}
                                <strong className="has-text-primary">
                                    {this.totalCopies()}
                                </strong>{" "}
                                copies in total.
                            </p>
                        </div>
                    </section>
                    </>
                )}
                <section className="section"></section>
            </section>
        );
    }
}

export default MainTab;

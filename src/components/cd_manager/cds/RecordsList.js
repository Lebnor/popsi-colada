import React, { Component } from "react";
import SingleRecord from "./SingleRecord";
import { deleteCd } from "../../utils";

class RecordsTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            perPage: 5,
            totalLen: this.props.objects ? this.props.objects.length : 0,
            search: "",
            selectedItem: null,
        };
    }
    // get the class of the active page button
    isActivePage(ind) {
        let classname = "pagination-link";
        if (ind == this.state.currentPage) {
            classname += " is-current";
        }
        return classname;
    }

    // list of objects filtered by the search input
    filteredObjects() {
        let valiObjects = [];
        if (this.props.objects)
            for (let i = 0; i < this.props.objects.length; i++)
                if (this.props.objects[i].name.includes(this.state.search))
                    valiObjects.push(this.props.objects[i]);

        return valiObjects;
    }

    // Maps a record into a table row
    mapping(item, ind) {
        return (
            <tr key={ind}>
                <th>
                    {ind +
                        this.state.perPage * (this.state.currentPage - 1) +
                        1}
                </th>
                <td colSpan="2">{item.name}</td>
                <td>{item.amount}</td>
                <td>
                    <button
                        className="button is-rounded is-small is-text has-text-warning"
                        onClick={() => this.props.setSelectedRecord(item)}
                    >
                        Edit
                    </button>
                </td>
                <td>
                    <button
                        onClick={() => {
                            deleteCd(item.id);
                        }}
                        className="button is-rounded is-small has-text-danger"
                    >
                        Delete
                    </button>
                </td>
            </tr>
        );
    }

    render() {
        return (
            <div className="container	">
                <table className="table is-mobile  is-hoverable">
                    <thead>
                        <tr>
                            <th>Search: </th>
                            <th colSpan="4">
                                <input
                                    id="table-search"
                                    onChange={(e) =>
                                        this.setState({
                                            search: e.target.value,
                                        })
                                    }
                                    className="input is-info is-expanded "
                                    type="text"
                                ></input>
                            </th>
                            <th className="has-text has-text-centered">
                                <button
                                    className="delete is-large"
                                    onClick={() => {
                                        this.setState({ search: "" });
                                        document.getElementById(
                                            "table-search"
                                        ).value = "";
                                    }}
                                ></button>
                            </th>
                        </tr>
                    </thead>
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th colSpan="2">Name</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.filteredObjects().length > this.state.perPage
                            ? this.filteredObjects()
                                  .slice(
                                      (this.state.currentPage - 1) *
                                          this.state.perPage,
                                      (this.state.currentPage - 1) *
                                          this.state.perPage +
                                          this.state.perPage
                                  )
                                  .map((item, ind) => this.mapping(item, ind))
                            : this.filteredObjects().map((item, ind) =>
                                  this.mapping(item, ind)
                              )}
                    </tbody>
                </table>

                <nav
                    className="pagination is-rounded"
                    role="navigation"
                    aria-label="pagination"
                >
                    <ul className="pagination-list">
                        {this.props.objects &&
                            this.filteredObjects().length >
                                this.state.perPage &&
                            this.filteredObjects()
                                .slice(
                                    0,
                                    Math.ceil(
                                        this.filteredObjects().length /
                                            this.state.perPage
                                    )
                                )
                                .map((item, ind) => {
                                    return (
                                        <li key={ind}>
                                            <a
                                                className={this.isActivePage(
                                                    ind + 1
                                                )}
                                                aria-label={`Go to page ${
                                                    ind + 1
                                                }`}
                                                onClick={() => {
                                                    this.setState({
                                                        currentPage: ind + 1,
                                                    });
                                                }}
                                            >
                                                {ind + 1}
                                            </a>{" "}
                                        </li>
                                    );
                                })}
                    </ul>
                </nav>
            </div>
        );
    }
}

export default RecordsTab;

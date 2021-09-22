import React, { Component } from "react";
import CSRFToken from "../../csrf_token";
import SuggestLogin from "../../SuggestLogin";
import { createRecord } from "../../utils";
import AmountInput from "../Form/AmountInput";
import NameInput from "../Form/NameInput";
import SubmitButton from "../Form/SubmitButton";

class CreateRecord extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nameVal: "",
            amountVal: false,
            nameValid: false,
            amountValid: false,
            formValid: false,
            submitted: false,
        };
    }

    handleOnSubmit(e) {
        e.preventDefault();
        let name = this.state.nameVal;
        let amount = parseInt(this.state.amountVal);
        createRecord(name, amount);
        this.setState({ submitted: true, formValid: false });
    }

    render() {
        if (!this.props.loggedIn) {
            return (
                <div className="level">
                    <div className="level-item">
                        <SuggestLogin />
                    </div>
                </div>
            );
        }

        return (
            <section className="px-5">
                <div className="box">
                    <form
                        onSubmit={(e) => {
                            this.handleOnSubmit(e);
                        }}
                        className="section"
                    >
                        <CSRFToken />
                        <div className="columns">
                            <div className="control column is-quarter">
                                <div className="field is-align-items-center">
                                    <label className="label">Name</label>
                                    <NameInput
                                        updates={(value) =>
                                            this.setState({ nameVal: value })
                                        }
                                    />
                                </div>
                            </div>

                            <div className="control column is-quarter">
                                <div className="field is-align-items-center">
                                    <label className="label">Amount</label>
                                    <AmountInput
                                        updates={(value) =>
                                            this.setState({ amountVal: value })
                                        }
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <SubmitButton
                                className="button field"
                                active={
                                    this.state.nameVal && this.state.amountVal
                                }
                                onClick={(e) => this.handleOnSubmit(e)}
                            />
                        </div>
                    </form>

                    {this.state.submitted && (
                        <div className="appear notification is-success is-light level level-item">
                            <button
                                className="delete"
                                onClick={() =>
                                    this.setState({ submitted: false })
                                }
                            ></button>
                            Submitted succesfully.
                        </div>
                    )}


                </div>
            </section>
        );
    }
}

export default CreateRecord;

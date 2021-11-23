import React, { Component } from "react";
import { update } from "../../utils";
import AmountInput from "../Form/AmountInput";
import NameInput from "../Form/NameInput";
import SubmitButton from "../Form/SubmitButton";

class SingleRecord extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nameVal: "",
            amountVal: "",
            editName: false,
            editAmount: false,
        };
    }

    change(input) {
        if (input === "name") {
            if (this.state.editName)
                this.setState({ nameVal: "", editName: false });
            else this.setState({ editName: true });
        } else if (input === "amount") {
            if (this.state.editAmount)
                this.setState({ amountVal: "", editAmount: false });
            else this.setState({ editAmount: true });
        }
    }

    getName() {
        return this.state.nameVal === ""
            ? this.props.cd.name
            : this.state.nameVal;
    }
    getAmount() {
        return this.state.amountVal === ""
            ? this.props.cd.amount
            : this.state.amountVal;
    }

    isValid() {
        if (
            this.state.nameVal === null ||
            this.state.amountVal === null ||
            (!this.state.amountVal && !this.state.nameVal)
        )
            return false;
        return true;
    }

    handleSubmit(e) {
        e.preventDefault();
        let name = this.getName();
        let amount = this.getAmount();
        let id = this.props.cd.id;
        update(id, name, amount);
        this.setState({
            nameVal: "",
            amountVal: "",
            editName: false,
            editAmount: false,
        });
    }
    render() {
        if (!this.props.cd) {
            return <div></div>;
        }
        return (
            <div className="">
                <h2 className="is-size-1-desktop has-text-centered has-text-warning">
                    Edit Mode
                </h2>

                <form className="section">
                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label">Name: </label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <div className="control">
                                    <NameInput
                                        updates={(e) =>
                                            this.setState({ nameVal: e })
                                        }
                                        value={this.props.cd.name}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label">Amount: </label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <div className="control">
                                    <AmountInput
                                        updates={(e) =>
                                            this.setState({ amountVal: e })
                                        }
                                        value={this.props.cd.amount}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <SubmitButton
                        className="button is-text"
                        onClick={(e) => this.handleSubmit(e)}
                        active={this.isValid()}
                    />
                </form>
            </div>
        );
    }
}

export default SingleRecord;

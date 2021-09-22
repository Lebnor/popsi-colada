import React, { Component } from "react";
import withValidation from "./withValidation";

class NameInput extends Component {

    render() {
        const { cls, onChange } = this.props;

        return (
            <div>
                <input onChange={onChange} className={cls}></input>
            </div>
        );
    }
}

export default withValidation(NameInput, (e)=>e.match("^[א-תa-zA-Z0-9]+$"), "Name consists of letters and digits only");

import React, { Component } from "react";
import NameInput from "../Form/NameInput";
import AmountInput from "../Form/AmountInput";

class SearchTab extends Component {
    constructor(props) {
        super(props);

        this.state = {
            one: false,
        }
    }

    stateAndContent(content) {
        console.log('state and content ' + content);
    }

    render() {
        return <div>
            
        NameInput
        <NameInput updates={(a, b)=>this.stateAndContent(a, b)} />
        AmountInput
        <AmountInput updates={(a, b)=>this.stateAndContent(a, b)} />

        </div>;
    }
}

export default SearchTab;

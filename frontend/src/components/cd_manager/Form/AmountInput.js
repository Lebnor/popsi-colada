import React, { Component } from 'react';
import withValidation from './withValidation';

class AmountInput extends Component {
    render() {
        const {cls, onChange} = this.props
        return (
            <div>
                <input value={this.props.value} type="number" className={cls} onChange={onChange}></input>
            </div>
        );
    }
}

export default withValidation(AmountInput, (e)=> parseInt(e) > 0, "Amount must be positive");
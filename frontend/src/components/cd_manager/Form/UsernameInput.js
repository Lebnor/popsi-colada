import React, { Component } from 'react';
import withValidation from './withValidation';

class UsernameInput extends Component {
    render() {
        const { cls, onChange } = this.props;
        return (
            <div>
                <input name={this.props.name} className={cls} onChange={onChange} />
            </div>
        );
    }
}

export default withValidation(UsernameInput, (e)=>e.match("^[א-תa-zA-Z0-9]+$"), "User name consists of letters and digits only");

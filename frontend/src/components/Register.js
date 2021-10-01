import React, { Component } from "react";
import UsernameInput from "./cd_manager/Form/UsernameInput";
import { register } from "./utils";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            credentials: { username: "", password: "" },
        };
    }

    inputChanged(e) {
        const cred = this.state.credentials;
        cred[e.target.name] = e.target.value;
        this.setState({ credentials: cred });
    }

    handleSubmit(e) {
        e.preventDefault();
        // let res = register("yyy", "yyy@yyy.com", "djfkngksjen3434d2");
        // console.log("res: " + res);
    }
    render() {
        return (
            <div>
                <NavBar
                    userdetails={this.props.userdetails}
                    loggedIn={this.props.loggedIn}
                />
                <div className="section">
                    <div className="columns">
                        <form>
                            <label htmlFor="name"> Enter Name:</label>
                            <input
                                onChange={(e) => this.inputChanged(e)}
                                name="username"
                                value={this.state.credentials.username}
                            />

                            <label htmlFor="pw"> Enter Password:</label>
                            <input
                                onChange={(e) => this.inputChanged(e)}
                                value={this.state.credentials.password}
                                name="password"
                                type="password"
                                // id="pw"
                            />

                            <input
                                onClick={(e) => this.handleSubmit(e)}
                                type="submit"
                            />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;

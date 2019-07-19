import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Readirect } from "react-router-dom";
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            loginFlag: false
        };
    }
    doLogin = (e) => {
        e.preventDefault();
        let username = this.refs.username.value;
        let password = this.refs.password.value;
        this.setState({
            username,
            password
        });
    }
    render() {
        const { from } = this.props.location.state || { from: { pathname: "/" } }
        return (
            <div>
                <form onSubmit={this.doLogin} >
                    <input type="text" ref='username' />
                    <input type="password" ref='paddword' />
                    <input type="submit" value="登录" />
                </form>
            </div>
        );
    }
}

export default Login;
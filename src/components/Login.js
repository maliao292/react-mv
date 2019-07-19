import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Readirect } from "react-router-dom";
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logmsg:'登录',
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
        if(username === "mario"&&password === "123"){
            this.setState({
            logmsg:'登录成功',
        });
        }else{
             this.setState({
            logmsg:'登录失败',
        });
        }
    }
    render() {
        const { from } = this.props.location.state || { from: { pathname: "/" } }
        if(this.state.loginFlag === true){

        }
        return (
            <div>
                <form onSubmit={this.doLogin} >
                    <input type="text" ref='username' />
                    <input type="password" ref='password' />
                    <input type="submit" value="登录" />
                    <h4>{this.state.logmsg}</h4>
                </form>
            </div>
        );
    }
}

export default Login;
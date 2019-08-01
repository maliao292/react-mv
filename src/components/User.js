import React, { Component } from 'react';
import Info from './User/Info';
import Main from './User/Main';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
class User extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className='user'>
                <div className="content">
                    <div className="left">
                        <Link to="/user" className="menu-link">个人中心</Link>
                        <Link to="/user/info" className="menu-link">用户信息</Link>
                    </div>
                    <div className="right">
                        <Route exact path="/user" component={Info}></Route>
                        <Route path="/user/info" component={Main}></Route>
                    </div>
                </div>
            </div>
        );
    }
}

export default User;
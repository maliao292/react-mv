import React, { Component } from 'react';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:"this is header"
          };
          {this.props.fun.toHeaderFun}
    }
    render() {
        return (
                <div>
                    {this.props.msg}
                </div>
        );
    }
}

export default Header;
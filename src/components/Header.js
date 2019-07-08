import React, { Component } from 'react';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:"this is header"
          };
         this.props.fun()
    }

    render() {
        return (
                <div>
                    {this.props.msg}{this.state.msg}
                    <button onClick={this.props.fun}>RUN</button>
                    <button onClick={this.props.getChildDate.bind(this,this.state.msg)}>子组件给父组件传值</button>    
                </div>
        );
    }
}

export default Header;
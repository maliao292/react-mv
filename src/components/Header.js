import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
                    <h1>{this.props.title}</h1>
                    {this.props.msg}{this.state.msg}
                    <button onClick={this.props.fun}>RUN</button>
                    <button onClick={this.props.getChildDate.bind(this,this.state.msg)}>子组件给父组件传值</button>    
                </div>
        );
    }
}
// 默认值
Header.defaultProps = {
    title:'标题',
}
Header.propTypes = {
    title:PropTypes.number
}
export default Header;
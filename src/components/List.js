import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    inputChange=()=>{
        console.log(this.refs.test.value);
    }
    getKeyCode=(e)=>{
        console.log(e.keyCode)
    }
    render() {
        return (
            <div>
                <input type="text" ref='test' onChange={this.inputChange}/>
                <h2>键盘事件</h2>
                <input type="text" onKeyUp={this.getKeyCode}/>
            </div>
        );
    }
}

export default List;
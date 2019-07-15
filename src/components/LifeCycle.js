// 生命周期函数 life cycle function
import React, { Component } from 'react';
class LifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    shouldComponentUpdate(){
        return 
    }
    componentWillUnmount(){
        // console.log('lifeCycle销毁')
    }
    render() {
        return (
           <div>
               <h1>生命周期函数</h1>
           </div> 
        );
    }
}

export default LifeCycle;
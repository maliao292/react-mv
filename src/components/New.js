import React, { Component } from 'react';
import Header from './Header'
class News extends Component {  // 继承Component 的第二种写法
    constructor(props) {
        super(props);
        this.state = {
            msg:'React表单'
        }
    }
    toHeaderFun = () => {
        console.log('来自news 的方法')
    }
    // 获取子组件 的传值
    getChildDate = (result) => {
console.log(result)
    }
    render(){
        return (
            <div>
                <Header msg={this.state.msg} fun={this.toHeaderFun} getChildDate={this.getChildDate}></Header>
            </div>
        )
    }
}
export default News;
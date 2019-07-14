import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import Axios from './Axios';
import FetchJsonp from './FetchJsonp';
import LifeCycle from './LifeCycle';
class News extends Component {  // 继承Component 的第二种写法
    constructor(props) {
        super(props);
        this.state = {
            msg:'React表单',
            flag:true
        }
    }
    toHeaderFun = () => {
        console.log('来自news 的方法')
    }
    // 获取子组件 的传值
    getChildDate = (result) => {
        this.setState({msg:result})
    }
    getAllFooter = () =>{
        console.log(this.refs.footer.state)
    }
    // 销毁组件方法
    setFlag = () => {
        this.setState({
            flag:!this.state.flag
        })
    }
    render(){
        return (
            <div>

                {this.state.flag?<LifeCycle />:''}
                <button onClick={this.setFlag}>销毁LifeCycle组件</button>
                <FetchJsonp></FetchJsonp>
               
                <Axios></Axios>
                <Header msg={this.state.msg} fun={this.toHeaderFun} getChildDate={this.getChildDate} title={222}></Header>
                <Footer ref='footer'></Footer>
                <button onClick={this.getAllFooter}> 获取Footer </button>
            </div>
        )
    }
}
export default News;
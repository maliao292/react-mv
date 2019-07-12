# 方法 写在 render(), constructor() 平级  day4
    < button onClick = { this.fun } >

        this.setState({})  修改值

# 函数中获取事件对象

run = (event) => {
    // event.target.value  form 表单值
    event.target.style.background = 'red';
}
--或者 ref
this.refs.test.value  见 List 组件

键盘事件  onKeyUp = { this.fun }
fun function(e) {
    e.keyCode // 获取哪个按件
}

# 获取input 值
 this.refs.name.value

 # 父子组件传值给子组件 
##  例如：
    父组件：<Header msg="这是传值"/> 
    子组件：this.props.msg
 ### 获取父组件方法  同传值
 --- 可以在子组件方法调用
 childFun = ()=>{
     this.props.getDate
 }
 --- 可以在标签内使用
 <span onClcik={this.props.getDate}></span>

 # 子组件向父组件传值

1、父组件定义方法 接收参数 result
    getChildDate = (result) => {
        this.setState({msg:result})
    }
2、将方法传给子组件<Header getChildDate={this.getChildDate}></Header>
3、子组件 执行方法 并传参
        <button onClick={this.props.getChildDate.bind(this,this.state.msg)}>子组件给父组件传值</button>   
# 父组件主动获取 子组件
    1、调用子组件的时候指定ref 的值，<Header ref='header'></Header>
    2、通过this.refs.header 获取整个子组件实例

# props
defaultProps ：在子组件 后设置 默认值（调用时未传值，详见：Header.js）
## propTypes
--1、 引入 import PropTypes from 'prop-types';
--Header.propTypes = {  // 使用，详见：Header.js
    title：PropType.string
}


# axios
1、 安装 npm install axios --save  // -save 保存到项目中
2、 引入 import axios from 'axios'
3、使用

## jsonp  fetch-jsonp
-- axios 不支持jsonp 使用 fetch-jsonp
安装: npm install fetch-jsonp
引用 fetchJsonp: import fetchJsonp from 'fetch-jsonp'  
使用 fetchJsonp('/api.jsonp').then((response)=>{
    return response.json()
    }).then((json)=>{
        console.log(json)
    })

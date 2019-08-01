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


# 生命周期函数
## 组件将要挂载 组件加载触发 构造函数 constructor 、组件将要挂载 componentWillMont、数据渲染 render、组件挂载完成componentDidmont（操作DOM,请求数据）
## 数据更新  是否更新 shouldComponentUpdate（函数需要返回 true 详见lifeCycle.js）,(数据)将要更新 componentWillUpdate  ，组件更新完成 componentDidUpdate
## 组件销毁前，将要销毁 componentWillUnmont  （销毁方法 详见：lifeCycle）
## 父组件传值 改变props 传值触发 componentWillReceiveProps

# router 路由配置 
## exact 表示严格匹配
1、
1. 安装react-router-dom : npm install react-router-dom --save
2. 找到项目的根组件引入 react-router-dom: import {BrowserRouter as Router,Router ,link} from 'react-router-dom';
3.  `<Router>
     <Route exact path="/news" component={News}></Route>
     <Route path="/news" component={News}></Route>
   </Router>`
4. 点击标签: <link to="/news">新闻</link>

## router传值

1、 get传值
1. `<Link to={`/ProductContent?aid=${v.aid}`}>{v.title}</Link> `
2. 对应页面取值 this.props.location.search.substr(1).split('=')[1]

2、 动态路由(详见 News.js-->Product.js)
1. 跳转 `<Route path="/content/:aid" component={Content}></Route>`
2. 传参aid <Link to={`/content/${v.aid}`}>{v.title}</Link> 
3. 对应页面取值 this.props.match.params.aid

# 解析HTML
*`<div dangerouslySetInnerHTML={{_html:this.state.list.content}}></div>`*

# 登录
1、 实现js跳转路由
1. 引入：`import {BrowserRouter as Router,Route,Link,Readirect} from "react-router-dom"`
2. 定义flag`
    this.setState({
        loginFlag:false
    })
`

# 子路由 模块化 
详见：01--18年9月React+React-router4.x+Ant Design+Flux视频教程--【IT营大地】 第20讲
     
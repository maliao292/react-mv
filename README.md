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
     this.props.parent.getDate
 }
 --- 可以在标签内使用
 <span onClcik={this.props.parent.getDate}></span>

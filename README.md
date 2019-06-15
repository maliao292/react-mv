# 方法 写在 render(),constructor() 平级  day4
<button onClick={this.fun}>

this.setState({})  修改值

# 函数中获取事件对象

run = (event)=>{
    // event.target.value  form 表单值
    event.target.style.background = 'red';
}
-- 或者 ref
 this.refs.test.value  见 List 组件

 键盘事件  onKeyUp={this.fun}
 fun function(e){
     e.keyCode // 获取哪个按件
 }


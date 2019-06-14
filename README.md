# 方法 写在 render(),constructor() 平级  day4
<button onClick={this.fun}>

this.setState({})  修改值

# 函数中获取事件对象

run = (event)=>{
    // event.target
    event.target.style.background = 'red';
}

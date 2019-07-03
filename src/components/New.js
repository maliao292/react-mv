import React from 'react';
class New extends React.Component {  // 继承Component 的第二种写法
    constructor(props) {
        super(props);
        this.state = {
            text:'React表单'
        }
    }
    render(){
        return (
            <div>{this.state.text}</div>
        )
    }
}
export default New;
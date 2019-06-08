import React from 'react';
class New extends React.Component {  // 继承Component 的第二种写法
    constructor(props) {
        super(props);
        this.state = {
            text:'this is News'
        }
    }
    render(){
        return (
            <div>{this.state.text}</div>
        )
    }
}
export default New;
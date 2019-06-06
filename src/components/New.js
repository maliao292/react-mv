import React, { Component } from 'react';
class New extends Component {
    constructor() {
        super();
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
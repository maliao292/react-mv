import React, { Component } from 'react';
class product extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title:'商品页'
         };
    }
    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
            </div>
        );
    }
}

export default product;
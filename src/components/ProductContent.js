import React, { Component } from 'react';
class ProductConent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:'商品详情组件',
         };
    }
    render() {
        return (
           <div>
               <h1>{this.state.msg}</h1>
           </div> 
        );
    }
}

export default ProductConent;
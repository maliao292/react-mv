import React, { Component } from 'react';
import url from 'url';
class ProductConent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:'商品详情组件',
         };
    }
    componentDidMount(){
        var search = this.props.location.search.substr(1).split('=')[1]
        console.log(search)
        console.log(url.parse(this.props.location.search,true))
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
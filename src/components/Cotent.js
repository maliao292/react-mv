 import React, { Component } from 'react';
 class Cotent extends Component {
     constructor(props) {
         super(props);
         this.state = { 
             msg:'这是新闻详情页',
          
          };
     }
     componentDidMount(){
         console.log(this.props.match.params.aid)
     }
     render() {
         return (
            <div>
                <h1>{this.state.msg}</h1>
            
            </div> 
         );
     }
 }
 
 export default Cotent;
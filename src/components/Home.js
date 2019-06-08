import React, { Component } from 'react';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            name:'Mario'
        }
     }
    render(){
        return (
            <div>{this.state.name}</div>
        )

    }
}

export default Home;
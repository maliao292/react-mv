import React, { Component } from 'react';
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:'这是Footer组件',
            arr:[1,2,3]
         };
    }
    render() {
        return (
           <div>Footer</div> 
        );
    }
}

export default Footer;
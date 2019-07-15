import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class product extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title:'商品页',
            list: [
                { aid: 1, title: '商品1' },
                { aid: 2, title: '商品2' },
                { aid: 3, title: '商品3' },
                { aid: 4, title: '商品4' }, 
                { aid: 5, title: '商品5' },
            ]
         };
    }
    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <ul>
                    {this.state.list.map((v, i) => {
                        return (
                            <li key={v.aid}>
                               <Link to={`/ProductContent?aid=${v.aid}`}>{v.title}</Link> 
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default product;
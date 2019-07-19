import React, { Component } from 'react';
import axios from 'axios';
class Axios extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }
    getData = () => {
        let api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=10';
        axios.get(api).then((response) => {
            console.log(response.data)
            this.setState({ list: response.data.result })
        })
    }
    render() {
        return ( <
            div >
            <
            h3 > http: //www.phonegap100.com/appapi.php?a=getPortalList&catid=20</h3>
            <
            h1 > Axios传值 < /h1> <
            button onClick = { this.getData } > 获取服务器API接口数据 < /button> <
            div > {
                this.state.list.map((value, i) => {
                        return ( < div key = { i } > { value.title } < /div>)
                        })
                } <
                /div> <
                /div>
            );
        }
    }

    export default Axios;
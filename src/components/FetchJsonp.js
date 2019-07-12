import React, { Component } from 'react';
import axios from 'axios';
import fetchJsonp from 'fetch-jsonp';
class FetchJsonp extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[]
         };
    }
    getJsonpData = ()=>{
        let api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=10';
        fetchJsonp(api).then((response)=>{
            return response.json()
            }).then((json)=>{
                console.log(json.result)
            })
    }
    render() {
        return (
           <div>
               <h2>FetchJsonp</h2>
               <button onClick={this.getJsonpData}>getJsonpData</button>
           </div> 
        );
    }
}

export default FetchJsonp;
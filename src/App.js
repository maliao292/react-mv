import React, { Component } from 'react';
// import ReactDom from 'react-dom';
import './assets/css/App.css';
import Home from './components/Home';
import New from './components/New'
class App extends Component {
  render(){
     return (
      <div className="App">
        <Home></Home>
        <New></New>
    </div>
    );
  }
}


export default App;

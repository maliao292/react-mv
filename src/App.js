import React, { Component } from 'react';
// import ReactDom from 'react-dom';
// import Home from './components/Home';
// import New from './components/New';
import List from './components/List'
import TodoList from './components/TodoList'
import Reactform from './components/ReactForm'
class App extends Component {
  render(){
     return (
      <div className="App">
        <List></List>
        <TodoList></TodoList>
      <Reactform></Reactform>
        {/* <Home></Home>
        <New></New> */}
    </div>
    );
  }
}


export default App;

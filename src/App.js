import React, { Component } from 'react';
// import ReactDom from 'react-dom';
// import Home from './components/Home';
// import New from './components/New';
// import List from './components/List'
// import Reactform from './components/ReactForm'
// import TodoList from './components/TodoList'
import News from './components/New'

class App extends Component {
  render(){
     return (
      <div className="App">
        <News></News>  
        {/* <Home></Home> */}
        {/* <List></List>
        
      <Reactform></Reactform> */}
      {/* <TodoList></TodoList> */}
        {/* <Home></Home>
        <New></New> */}
    </div>
    );
  }
}


export default App;

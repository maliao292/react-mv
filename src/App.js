import React, { Component } from 'react';
import './assets/css/App.css'
import './assets/css/index.css'

// import ReactDom from 'react-dom';
// import Home from './components/Home';
// import New from './components/New';
// import List from './components/List'
// import Reactform from './components/ReactForm'
// import TodoList from './components/TodoList'
import Content from './components/Cotent';
import News from './components/New';
import Home from './components/Home';
import User from './components/User';
import Product from './components/Product';
import Login from './components/Login';
import ProductContent from './components/ProductContent';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          {/* <div className="App-header">
          <Link to="/news" className="menu-link">新闻</Link>
          <Link to="/" className="menu-link">Home</Link>
          <Link to="/product" className="menu-link">产品</Link>
          <Link to="/content/5" className="menu-link">新闻详情</Link>
          <Link to="/login" className="menu-link">登录页</Link>
          </div> */}
          <div className="App-header">
            <Link to="/user" className="menu-link">新闻</Link>
            <Link to="/" className="menu-link">Home</Link>
          </div>

          <Route exact  path="/" component={Home}></Route>
          <Route   path="/user" component={User}></Route>
          
          <Route path="/login" component={Login}></Route>
          <Route path="/news" component={News}></Route>
          <Route path="/product" component={Product}></Route>
          <Route path="/content/:aid" component={Content}></Route>
          <Route path="/ProductContent
          " component={ProductContent}></Route>

        </Router>
        {/* <List></List> */}
        {/* <News></News>   */}
        {/*  <Home></Home> */}
        {/* <Reactform></Reactform> */}
        {/* <TodoList></TodoList> */}
        {/* <Home></Home>
        <New></New> */}
      </div>
    );
  }
}


export default App;

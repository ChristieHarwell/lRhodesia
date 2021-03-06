import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
// import * as firebase from 'firebase';
import NavBar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Home from './components/Home';
import Modal from './components/Modal';
class App extends Component {

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/productList" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>        
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;

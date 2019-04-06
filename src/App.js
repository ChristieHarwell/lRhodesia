import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import * as firebase from 'firebase';
import Navigation from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';

class App extends Component {

  constructor() {
    super();
    this.state = {
      inventory: 6
    };
  }

  componentDidMount() {
    const rootRef = firebase.database().ref().child('react');
    const inventoryRef = rootRef.child('inventory');
    inventoryRef.on('value', snap => {
      this.setState({
        inventory: snap.val()
      });
    });
  }
  render() {
    return (
      <React.Fragment>
        <Navigation />        
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <h3>{this.state.inventory}</h3>
      </React.Fragment>
    );
  }
}

export default App;

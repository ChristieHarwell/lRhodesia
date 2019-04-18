import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as firebase from 'firebase';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import {ProductProvider} from './context';
import * as serviceWorker from './serviceWorker';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCWiL841O6XNESS9BWuixzGQrgLwFVmlG0",
    authDomain: "reactprojectecommerce.firebaseapp.com",
    databaseURL: `https://reactprojectecommerce.firebaseio.com`,
    projectId: "reactprojectecommerce",
    storageBucket: "reactprojectecommerce.appspot.com",
    messagingSenderId: "891912775597"
};
firebase.initializeApp(config);

ReactDOM.render(
  <ProductProvider>
    <Router>
      <App />
    </Router>
  </ProductProvider>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

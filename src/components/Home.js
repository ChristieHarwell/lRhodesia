import React, { Component } from 'react';
import MainTitle from './Title';
import BackgroundVideo from './BackgroundVideo';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import '../App.css';


export default class Home extends Component {
  render() {

    return (
      <React.Fragment>
        <Jumbotron>
          <Button variant="light col-12 mx-auto my-2 text-center homepage-title" href="/ProductList">
            <MainTitle title="LRhodesia" />
            <BackgroundVideo className="video-container align-self-center mb-0 mx-auto" title="LRhodesia" />                
          </Button>
          
        </Jumbotron>

          
       
                   
      </React.Fragment>
    );
  }
}


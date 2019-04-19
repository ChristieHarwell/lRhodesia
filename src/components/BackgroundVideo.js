import React, { Component } from 'react';
import { Player } from 'video-react';
import '../App.css';
import video from './Flower_Ceiling.mp4';
import styled from 'styled-components';
import Title from './Title';



export default BackgroundVideo => {
  return (
     <Player
        autoPlay={true}
        loop={true}
        autoHide={false} disableDefaultControls={true}>
        <source src={video} />
          
      </Player>
  );
};

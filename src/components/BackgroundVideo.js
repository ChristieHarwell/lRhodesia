import React, { Component } from 'react';
import { Player } from 'video-react';
import video from '../images/Flower_Ceiling.mp4';

export default backgroundVideo => {
  return (
    <Player 
      autoPlay
      loop
      autoHide={false} disableDefaultControls={true}>
      <source src={video} />
    </Player>
  );
};

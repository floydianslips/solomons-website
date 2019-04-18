import React, { Component } from 'react';
import RandomImage from './RandomImage'

export default class Carousel extends Component {
  render () {
    return (
      <>
      <div className="wrap">
      	<div className="cube">
      		<div className="front"><RandomImage /></div>
      		<div className="back"><RandomImage /></div>
      		<div className="top"><RandomImage /></div>
      		<div className="bottom"><RandomImage /></div>
      		<div className="left"><RandomImage /></div>
      		<div className="right"><RandomImage /></div>
      	</div>
      </div>
    </>
    )
  }
}

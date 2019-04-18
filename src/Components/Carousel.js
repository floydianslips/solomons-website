import React, { Component } from 'react';
import owl from './owl.jpg';
import solomon from './solomon.jpg'

export default class Carousel extends Component {
  render () {
    return (
      <>
      <div className="wrap">
      	<div className="cube">
      		<div className="front"><img src={solomon} alt="sol"/></div>
      		<div className="back"><img src={solomon} alt="sol"/></div>
      		<div className="top"><img src={solomon} alt="sol"/></div>
      		<div className="bottom"><img src={solomon} alt="sol"/></div>
      		<div className="left"><img src={solomon} alt="sol"/></div>
      		<div className="right"><img src={solomon} alt="sol"/></div>
      	</div>
      </div>
    </>
    )
  }
}

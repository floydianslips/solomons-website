import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Carousel from './Components/Carousel'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Solomon is the Best!
            </p>
            <br/>
            <Carousel />

        </header>
      </div>
    );
  }
}

export default App;

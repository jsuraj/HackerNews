import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewsGrid from './components/newsgrid'

class App extends Component {
  render() {
    return (
      <div className='newsgrid-div'>
        <NewsGrid />
      </div>
    );
  }
}

export default App;

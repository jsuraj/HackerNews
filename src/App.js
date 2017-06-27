import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewsGrid from './components/newsgrid'
import * as HNapi from './api/apicall'

class App extends Component {
  constructor(props) {
    super(props);
    // var topNewsArray = HNapi.getTopNews();
    // console.log('topNewsArray:'+topNewsArray);
    HNapi.getTopNews()
    .then(function(data) {
      var topNewsArray = data;
      console.log('TopNewsArray in App:'+topNewsArray);
    })
    .catch(function(error) {
      console.log(error);
    })
  }

  render() {
    return (
      <div className='newsgrid-div'>
        <NewsGrid />
      </div>
    );
  }
}

export default App;

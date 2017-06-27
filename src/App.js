import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewsGrid from './components/newsgrid'
import * as HNapi from './api/apicall'
import './styles/newsitem.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topNewsIdArray : []
    }
    // var topNewsArray = HNapi.getTopNews();
    // console.log('topNewsArray:'+topNewsArray);
    var self = this;
    var topNewsArray;
    HNapi.getTopNews()
    .then(function(data) {
      topNewsArray = data;
      console.log('TopNewsArray in App:'+topNewsArray);
      self.setState({
        topNewsIdArray : topNewsArray.slice(0, 90)
      })
    })
    .catch(function(error) {
      console.log(error);
    })
    console.log('topNewsArray in constructor: '+topNewsArray);
    // this.state = {
    //   topNewsIdArray : topNewsArray
    // };
  }

  // componentDidMount() {
  //   var self = this;
  //   var topNewsArray;
  //   HNapi.getTopNews()
  //   .then(function(data) {
  //     topNewsArray = data;
  //     console.log('TopNewsArray in App:'+topNewsArray);
  //     self.setState({
  //       topNewsIdArray : topNewsArray
  //     })
  //   })
  //   .catch(function(error) {
  //     console.log(error);
  //   })
  //   console.log('topNewsArray in constructor: '+topNewsArray);
  // }

  render() {
    return (
      <div className='newsgrid-div'>
        <NewsGrid  topNewsIdArray = {this.state.topNewsIdArray} />
      </div>
    );
  }
}

export default App;

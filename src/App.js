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
      topNewsIdArray : [],
      topNewsIdArrayReceived : false
    }
    // var topNewsArray = HNapi.getTopNews();
    // console.log('topNewsArray:'+topNewsArray);
    // var self = this;
    // var topNewsArray;
    // HNapi.getTopNews()
    // .then(function(data) {
    //   topNewsArray = data;
    //   console.log('TopNewsArray in App:'+topNewsArray);
    //   self.setState({
    //     topNewsIdArray : topNewsArray.slice(0, 90)
    //   })
    // })
    // .catch(function(error) {
    //   console.log(error);
    // })
    // console.log('topNewsArray in constructor: '+topNewsArray);
    // this.state = {
    //   topNewsIdArray : topNewsArray
    // };
  }

  componentWillMount() {
    // alert('componentDidMount');
    var self = this;
    var topNewsArray;
    HNapi.getTopNews()
    .then(function(data) {
      topNewsArray = data;
      console.log('TopNewsArray in App:'+topNewsArray);
      self.setState({
        topNewsIdArray : topNewsArray.slice(0, 90),
        topNewsIdArrayReceived : true
      })
    })
    .catch(function(error) {
      console.log(error);
    })
  }

  // componentDidMount() {
  //   var self = this;
  //   // var newsItemArray = [];
  //   console.log('array length:'+this.state.topNewsIdArray.length);
  //   for(var i=0; i<this.state.topNewsIdArray.length; i++) {
  //     // console.log('in for loop:'+self.state.topNewsIdArray[i]);
  //     HNapi.getNewsItem(this.state.topNewsIdArray[i])
  //     .then(function(data) {
  //       var newsItem = data;
  //       var tempNewsItemArray = this.state.newsItemArray;
  //       tempNewsItemArray.push(newsItem);
  //       // alert('req successfull');
  //       self.setState({
  //         newsItemArray : tempNewsItemArray
  //       });
  //     })
  //     .catch(function(error) {
  //       console.log(error);
  //     })
  //   }
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

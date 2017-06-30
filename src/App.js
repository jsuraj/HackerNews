import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewsGrid from './components/newsgrid'
import * as HNapi from './api/apicall'
import './styles/newsitem.css'
import {PageHeader} from 'react-bootstrap'
import { Route, Redirect, HashRouter, Switch, Router, BrowserRouter } from 'react-router-dom'
// import {HashRouter} from 'react-router-dom'
import createHashHistory from 'history/createHashHistory';
import Userprofile from './components/userprofile'

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

  // componentDidMount() {
  //   // alert('componentDidMount');
  //   var self = this;
  //   var topNewsArray;
  //   HNapi.getTopNews()
  //   .then(function(data) {
  //     topNewsArray = data;
  //     console.log('TopNewsArray in App:'+topNewsArray);
  //     self.setState({
  //       topNewsIdArray : topNewsArray.slice(0, 90),
  //       topNewsIdArrayReceived : true
  //     })
  //   })
  //   .catch(function(error) {
  //     console.log(error);
  //   })
  // }

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
    const history = createHashHistory();
    return (
      <div className='newsgrid-div'>
        <PageHeader>HackerNews</PageHeader>
        <BrowserRouter history={history}>
            <Switch>
                <Route exact path="/" component={NewsGrid} />
                <Route exact path="/user/:userId" component={Userprofile} />
            </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

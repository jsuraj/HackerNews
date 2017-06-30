import React, { Component } from 'react';
import './App.css';
import NewsGrid from './components/newsgrid'
import './styles/newsitem.css'
import {PageHeader} from 'react-bootstrap'
import { Route, Switch, Router, BrowserRouter } from 'react-router-dom'
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
  }

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

import React from 'react'
import * as HNapi from '../api/apicall'
import NewsRow from './newsrow'
import {Jumbotron} from 'react-bootstrap'

class Userprofile extends React.Component {
  constructor(props) {
    console.dir(props);
    console.log('userId: '+props.match.params.userId);
    super(props);
    this.state = {
      id : props.match.params.userId,
      created : '',
      karma : '',
      submitted: [],
      userNewsItemArray : []
    }
    this.getNewsItems = this.getNewsItems.bind(this);
    this.handleNewsClick = this.handleNewsClick.bind(this);
  }

  componentDidMount() {
    var self = this;
    var userInfo;
    HNapi.getUserInfo(this.state.id)
    .then(function(data) {
      userInfo = data;
      console.log('userInfo in Userprofile:'+userInfo);
      self.setState({
        created : userInfo.created,
        karma : userInfo.karma,
        submitted : userInfo.submitted
      })
      self.getNewsItems(userInfo.submitted.slice(0, 90));
    })
    .catch(function(error) {
      console.log(error);
    })
  }

  getNewsItems(topNewsIdArray) {
    var self = this;
    console.log('array length in Userprofile: '+topNewsIdArray.length);
    for(var i=0; i<topNewsIdArray.length; i++) {
      // console.log('in for loop:'+self.state.topNewsIdArray[i]);
      HNapi.getNewsItem(topNewsIdArray[i])
      .then(function(data) {
        var newsItem = data;
        var tempNewsItemArray = self.state.userNewsItemArray;
        if(newsItem.type === 'story') {
          tempNewsItemArray.push(newsItem);
        }
        // alert('req successfull');
        self.setState({
          userNewsItemArray : tempNewsItemArray
        });
      })
      .catch(function(error) {
        console.log(error);
      })
    }
  }

  handleNewsClick(url) {
    console.log('NewsGrid: handleNewsClick: url: '+url);
    window.open(url, '_blank')
  }

  render() {
    var tempLength = Math.floor(this.state.userNewsItemArray.length/3);
    console.log('templength: '+tempLength);
    var rows=[];
    for(var i=0;i<tempLength;i++) {
      var ary = [];
      ary.push(this.state.userNewsItemArray[i*3]);
      ary.push(this.state.userNewsItemArray[i*3+1]);
      ary.push(this.state.userNewsItemArray[i*3+2]);
      rows.push(<NewsRow newsRowItems={ary} key={i} handleNewsClick={this.handleNewsClick}/>);
      console.log('ary: '+ary);
    }
    return(
      <div>
        <Jumbotron bsStyle='primary'>
          id:{this.state.id}<br/>
          created:{this.state.created}<br/>
          karma:{this.state.karma}<br/>
        </Jumbotron>
        <div>
          {rows}
        </div>
    </div>
    )
  }
}

export default Userprofile

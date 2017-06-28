import React from 'react'
import NewsRow from './newsrow'
import * as HNapi from '../api/apicall'

class NewsGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newsItemArray : []
    };
  }

componentWillReceiveProps(nextProps){
  var self = this;
  console.log('array length in newsgrid: '+nextProps.topNewsIdArray.length);
  for(var i=0; i<nextProps.topNewsIdArray.length; i++) {
    // console.log('in for loop:'+self.state.topNewsIdArray[i]);
    HNapi.getNewsItem(nextProps.topNewsIdArray[i])
    .then(function(data) {
      var newsItem = data;
      var tempNewsItemArray = self.state.newsItemArray;
      tempNewsItemArray.push(newsItem);
      // alert('req successfull');
      self.setState({
        newsItemArray : tempNewsItemArray
      });
    })
    .catch(function(error) {
      console.log(error);
    })
  }
}

  render() {
    var rows = [];
    for(var i=0; i<this.state.newsItemArray.length; i++) {
      
    }
    return(
      <div>
        <NewsRow />
        <NewsRow />
        <NewsRow />
      </div>
    );
  }
}

export default NewsGrid;

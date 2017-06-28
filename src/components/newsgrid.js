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
    var tempArray = this.state.newsItemArray;
    for(var i=0; i<tempArray.length; i=i+3) {
      var ary = new Array();
      ary.push(tempArray[i]);
      ary.push(tempArray[i+1]);
      ary.push(tempArray[i+2]);
      rows.push(<NewsRow newsRowItems={ary} key={i} />)
    }
    return(
      <div>
        {rows}
      </div>
    );
  }
}

export default NewsGrid;

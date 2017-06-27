import React from 'react'
import NewsRow from './newsrow'
import * as HNapi from '../api/apicall'

class NewsGrid extends React.Component {
  constructor(props) {
    super(props);
    // var topNewsArray = HNapi.getTopNews();
    // console.log('topNewsArray:'+topNewsArray);
    HNapi.getTopNews()
    .then(function(data) {
      var topNewsArray = data;
      console.log('TopNewsArray:'+topNewsArray);
    })
    .catch(function(error) {
      console.log(error);
    })
  }

  render() {
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

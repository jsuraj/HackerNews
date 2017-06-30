import React from 'react'
import NewsRow from './newsrow'
import * as HNapi from '../api/apicall'

class NewsGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topNewsIdArray : [],
      topNewsIdArrayReceived : false,
      newsItemArray : []
    };
    this.handleNewsClick = this.handleNewsClick.bind(this);
  }


  handleNewsClick(url) {
    console.log('NewsGrid: handleNewsClick: url: '+url);
    window.open(url, '_blank')
  }

  getNewsItems(topNewsIdArray) {
    var self = this;
    console.log('array length in newsgrid: '+topNewsIdArray.length);
    for(var i=0; i<topNewsIdArray.length; i++) {
      // console.log('in for loop:'+self.state.topNewsIdArray[i]);
      HNapi.getNewsItem(topNewsIdArray[i])
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

  componentDidMount() {
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
      self.getNewsItems(self.state.topNewsIdArray);
    })
    .catch(function(error) {
      console.log(error);
    })
  }

  render() {
    var rows = [];
    var tempArray = this.state.newsItemArray;
    for(var i=0; i<tempArray.length; i=i+3) {
      var ary = new Array();
      ary.push(tempArray[i]);
      ary.push(tempArray[i+1]);
      ary.push(tempArray[i+2]);
      rows.push(<NewsRow newsRowItems={ary} key={i} handleNewsClick={this.handleNewsClick}/>)
    }
    return(
      <div>
        {rows}
      </div>
    );
  }
}

export default NewsGrid;

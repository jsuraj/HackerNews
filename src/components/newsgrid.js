import React from 'react'
import NewsRow from './newsrow'
import * as HNapi from '../api/apicall'

class NewsGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newsItemArray : []
    };
    this.handleNewsClick = this.handleNewsClick.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  updateState(nextProps) {
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
  handleNewsClick(url) {
    console.log('NewsGrid: handleNewsClick: url: '+url);
    window.open(url, '_blank')
  }

  componentWillReceiveProps(nextProps){
    this.updateState(nextProps);
  }

  componentDidMount() {
    var self = this;
    if(this.props.topNewsIdArray.length !=0 && this.state.newsItemArray.length === 0) {
      // alert('in if');
      this.updateState(self.props);
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

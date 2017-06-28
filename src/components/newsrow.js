import React from 'react'
import NewsItem from './newsitem'

class NewsRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newsItemArray : []
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ newsItemArray: nextProps.newsRowItems });
  }
  
  render() {
    return(
      <div className='row'>
        <NewsItem newsItem={this.state.newsItemArray[0]}/>
        <NewsItem newsItem={this.state.newsItemArray[1]}/>
        <NewsItem newsItem={this.state.newsItemArray[2]}/>
      </div>
    )
  }
}

export default NewsRow;

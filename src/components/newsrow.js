import React from 'react'
import NewsItem from './newsitem'

class NewsRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='row'>
        <NewsItem newsItem={this.props.newsRowItems[0]}/>
        <NewsItem newsItem={this.props.newsRowItems[1]}/>
        <NewsItem newsItem={this.props.newsRowItems[2]}/>
      </div>
    )
  }
}

export default NewsRow;

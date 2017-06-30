import React from 'react'
import NewsItem from './newsitem'

class NewsRow extends React.Component {

  componentWillReceiveProps(nextProps) {
    this.props = nextProps;
    // this.setState({ newsItemArray: nextProps.newsRowItems });
  }

  render() {
    return(
      <div className='row'>
        <NewsItem newsItem={this.props.newsRowItems[0]} handleNewsClick={this.props.handleNewsClick}/>
        <NewsItem newsItem={this.props.newsRowItems[1]} handleNewsClick={this.props.handleNewsClick}/>
        <NewsItem newsItem={this.props.newsRowItems[2]} handleNewsClick={this.props.handleNewsClick}/>
      </div>
    )
  }
}

export default NewsRow;

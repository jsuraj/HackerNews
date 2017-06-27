import React from 'react'
import NewsItem from './newsitem'

class NewsRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='row'>
        <NewsItem newsId={this.props.rowIdArray[0]}/>
        <NewsItem newsId={this.props.rowIdArray[1]}/>
        <NewsItem newsId={this.props.rowIdArray[2]}/>
      </div>
    )
  }
}

export default NewsRow;

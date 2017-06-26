import React from 'react'
import NewsItem from './newsitem'

class NewsRow extends React.Component {
  render() {
    return(
      <div>
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </div>
    )
  }
}

export default NewsRow;

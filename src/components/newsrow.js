import React from 'react'
import NewsItem from './newsitem'

class NewsRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='row'>
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </div>
    )
  }
}

export default NewsRow;

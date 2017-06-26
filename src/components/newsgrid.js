import React from 'react'
import NewsRow from './newsrow'

class NewsGrid extends React.Component {
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

import React from 'react'
import {Jumbotron} from 'react-bootstrap'

class NewsItem extends React.Component {
  render() {
    return(
      <div className='col-md-4'>
      <Jumbotron bsStyle='primary'>
        <h2>Title of news</h2>
        <p>Content of news</p>
        </Jumbotron>
      </div>
    )
  }
}

export default NewsItem;

import React from 'react'
import {Jumbotron} from 'react-bootstrap'
import * as HNapi from '../api/apicall'

class NewsItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='col-md-4'>
      <Jumbotron bsStyle='primary'>
      
      </Jumbotron>
      </div>
    )
  }
}

export default NewsItem;

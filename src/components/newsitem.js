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
      <Jumbotron bsStyle='primary' >
        <h2>{this.props.newsItem.title}</h2>
        <hr/>
        <div className="row">
          <div className = "col-md-4">
              <i className="material-icons">person</i>
              <br/>
              {this.props.newsItem.by}
          </div>
          <div className = "col-md-4">
              <i className="material-icons">star_rate</i>
              <br/>
              {this.props.newsItem.score}
          </div>
          <div className = "col-md-4">
              <i className="material-icons">comment</i>
              <br/>
              {this.props.newsItem.descendants}
          </div>
        </div>
        </Jumbotron>
      </div>
    )
  }
}

export default NewsItem;

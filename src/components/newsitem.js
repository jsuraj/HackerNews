import React from 'react'
import {Jumbotron} from 'react-bootstrap'
import * as HNapi from '../api/apicall'
import {Link} from 'react-router-dom'

class NewsItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(url) {
    console.log('NewsItem:handleClick: '+url);
    this.props.handleNewsClick(url);
  }

  componentWillReceiveProps(nextProps) {
    this.props = nextProps;
  }

  render() {
    return(
      <div className='col-md-4'>
      <Jumbotron bsStyle='primary'>
        <h2 className='title' onClick={this.handleClick.bind(null, this.props.newsItem.url)}>
          {this.props.newsItem.title}
        </h2>
        <hr/>
        <div className="row">
          <div className = "col-md-4 col-xs-4">
              <i className="material-icons">person</i>
              <br/>
              <Link to={`/user/${this.props.newsItem.by}`}>{this.props.newsItem.by}</Link>              
          </div>
          <div className = "col-md-4 col-xs-4">
              <i className="material-icons">star_rate</i>
              <br/>
              {this.props.newsItem.score}
          </div>
          <div className = "col-md-4 col-xs-4">
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

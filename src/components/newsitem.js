import React from 'react'
import {Jumbotron} from 'react-bootstrap'
import * as HNapi from '../api/apicall'

class NewsItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id : 0,
      deleted	: false,
      type : '',
      by	: '',
      time	: '',
      text : '',
      dead : false,
      parent : 0,
      poll : 0,
      kids : [],
      url	: '',
      score	: 0,
      title	: '',
      parts	: [],
      descendants : 0
    };
  }

  componentDidMount() {
    var self = this;
    var newsItem;
    HNapi.getNewsItem(this.props.newsId)
    .then(function(data) {
      newsItem = data;
      self.setState({
        id : newsItem.id,
        title : newsItem.title,
        by : newsItem.by,
        time : newsItem.time,
        type : newsItem.type,
        url : newsItem.url,
        descendants : newsItem.descendants,
        kids : newsItem.kids,
        score : newsItem.score
      })
      console.log(newsItem);
    })
    .catch(function(error) {
      console.log(error);
    })
  }

  render() {
    return(
      <div className='col-md-4'>
      <Jumbotron bsStyle='primary'>
        <h2>{this.state.title}</h2>
        <hr/>
        <div className="card-details">
          <div classame="author-details">
          </div>
          <div className="score-details">
          </div>
          <div className="comment-details">
          </div>
        </div>
        </Jumbotron>
      </div>
    )
  }
}

export default NewsItem;

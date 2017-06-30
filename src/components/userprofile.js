import React from 'react'
import * as HNapi from '../api/apicall'

class Userprofile extends React.Component {
  constructor(props) {
    console.dir(props);
    console.log('userId: '+props.match.params.userId);
    super(props);
    this.state = {
      id : props.match.params.userId,
      created : '',
      karma : '',
      submitted: []
    }
  }

  componentDidMount() {
    var self = this;
    var userInfo;
    HNapi.getUserInfo(this.state.id)
    .then(function(data) {
      userInfo = data;
      console.log('userInfo in Userprofile:'+userInfo);
      self.setState({
        created : userInfo.created,
        karma : userInfo.karma,
        submitted : userInfo.submitted
      })
    })
    .catch(function(error) {
      console.log(error);
    })
  }

  render() {
    return(
      <div>
        id:{this.state.id}<br/>
        created:{this.state.created}<br/>
        karma:{this.state.karma}<br/>
        submitted:{this.state.submitted}<br/>
      </div>
    )
  }
}

export default Userprofile

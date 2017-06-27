import React from 'react'
import NewsRow from './newsrow'

class NewsGrid extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var rows = [];
    var tempArray = this.props.topNewsIdArray;
    for(var i=0; i<tempArray.length; i=i+3) {
      var ary = new Array();
      ary.push(tempArray[i]);
      ary.push(tempArray[i+1]);
      ary.push(tempArray[i+2]);
      rows.push(<NewsRow rowIdArray={ary} key={tempArray[i]}/>)
    }
    return(
      <div>
        {rows}
      </div>
    );
  }
}

export default NewsGrid;

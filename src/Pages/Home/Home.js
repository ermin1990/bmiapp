import React from "react";

import ListResults from '../Rezultati/ListResults'

import { connect } from "react-redux";

class Home extends React.Component {
render(){

  const {lists} = this.props;

  //console.log(this.props);

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <ListResults lists={lists}/>
        </div>
      </div>
    </div>
  );
}
}

const mapStateToProps = (state)=> {
  return {
    lists : state.list.lists
  }
}


export default connect(mapStateToProps)(Home);

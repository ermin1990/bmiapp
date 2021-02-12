import React from "react";

import ListResults from '../Rezultati/ListResults'

import { connect } from "react-redux";

class Home extends React.Component {
render(){

  const {users} = this.props;

  console.log(this.props);

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <ListResults users={users}/>
        </div>
      </div>
    </div>
  );
}
}

const mapStateToProps = (state)=> {
  return {
    users : state.user.users
  }
}


export default connect(mapStateToProps)(Home);

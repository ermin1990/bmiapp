import React from "react";
import SingleResult from './SinglResults'


const ListResults = ({users}) => {
      
  return (
    <div className="container">
      {users && users.map(user=>{
        return (
          <SingleResult user={user} key={user.id}/>
        )
      })}
    </div>
  )
};


export default ListResults;

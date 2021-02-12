import React from "react";
import SingleResult from './SinglResults'


const ListResults = ({lists}) => {
      
  return (
    <div className="container">
      {lists && lists.map(list=>{
        return (
          <SingleResult list={list} key={list.id}/>
        )
      })}
    </div>
  )
};


export default ListResults;

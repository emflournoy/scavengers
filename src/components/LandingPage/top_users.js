import React, { Component } from 'react';


const TopUsers = ({data})=>{
  console.log(data);
  return(
    <div className="leader">
       <div className="place"></div>
       <div className="lead-name">{data.firstname}</div>
       <div className="points">{data.total_points}</div>
    </div>
  );
}

export default TopUsers;

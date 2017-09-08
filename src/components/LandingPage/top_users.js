import React, { Component } from 'react';


const TopUsers = ({data, key, index})=>{
  console.log('keys', key);
  return(
    <div className="leader">
       <div className="place">{index+1}</div>
       <div className="lead-name">{data.firstname}</div>
       <div className="points">{data.total_points} pts</div>
    </div>
  );
}

export default TopUsers;

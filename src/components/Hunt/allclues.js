import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';


class AllClues extends Component {
  constructor(){
    super();
    this.state={
      completedstatus: 'incomplete'
    }
  }


  componentWillMount(){
    this.setState({pathName: `/CluePage/${this.props.data.clue_id}`},()=>{
      if (this.props.data.completed){
        this.setState({completedstatus: 'complete', pathName: '/HuntPage/1'})
      }
    })
  }

  render(){
    return (
      <div className='allcards'>
        <Link to={{pathname: this.state.pathName}}>
          <button className={`cluecard ${this.state.completedstatus}`}>{this.props.num}</button>
        </Link>
      </div>
    );
  }
}


export default AllClues;

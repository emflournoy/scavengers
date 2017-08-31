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
    if (this.props.data.completed){
      this.setState({completedstatus: 'complete'})
    }
  }

  render(){
    return (
      <div className='allcards'>
        <Link to={{pathname: `/CluePage/${this.props.data.clue_id}`}}>
          <button className={`cluecard ${this.state.completedstatus}`}>{this.props.num}</button>
        </Link>
      </div>
    );
  }
}


export default AllClues;

import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import looking_glass from '../../images/magnifier2.png';


class AllClues extends Component {
  constructor(){
    super();
    this.state={
      completedstatus: 'untouched'
    }
  }


  componentWillMount(){
    this.setState({pathName: `/CluePage/${this.props.data.clue_id}`},()=>{
      if (this.props.data.completed){
        this.setState({completedstatus: 'complete', pathName: '/HuntPage/1'})
      } else if(!this.props.data.completed){
        this.setState({completedstatus: 'untouched'})
      } else {
        this.setState({completedstatus: 'untouched'})
      }
    })
  }

  render(){
    return (
      <div className='allcards'>
        <Link to={{pathname: this.state.pathName}}>
          <button className={`cluecard ${this.state.completedstatus}`}><img src={looking_glass}></img></button>
        </Link>
      </div>
    );
  }
}


export default AllClues;

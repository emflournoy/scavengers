import React, { Component } from 'react';

// import Style from '../../App.css';

class CluePage extends Component {
  constructor(props) {
   super(props);
   this.state = {value: ''};

   this.handleChange = this.handleChange.bind(this);
  //  this.handleSubmit = this.handleSubmit.bind(this);
 }

 async handleChange(event) {
   let res = await fetch('http://localhost:3000/classify', {
     method: 'POST',
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
     },
     body: JSON.stringify(event.target.value)
   })
   let jsonResponse = await res.json();
  //  this.setState({value: jsonResponse});

 }

  render(){
    return (
      <div className='body'>
        <div className='nav'>
        </div>
        <h1>THIS IS A CLUE</h1>
        <button className='lgbutton'>
          <input type="file" accept="image/*" capture="camera" value={this.state.value} onChange={this.handleChange}/>
        </button>
      </div>
    )
  }
}



export default CluePage;

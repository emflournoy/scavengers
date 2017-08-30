import React, { Component } from 'react';

// import Style from '../../App.css';

class CluePage extends Component {
  constructor(props) {
   super(props);
   this.state = {value: ''};

   this.handleChange = this.handleChange.bind(this);
  //  this.handleSubmit = this.handleSubmit.bind(this);
 }

 handleChange(event) {
   let file = event.target.files[0];
   this.setState({value: event.target.value},()=>{
    var reader = new FileReader();
    reader.onload = function(){
      var dataURL = reader.result;
      fetch('http://localhost:3000/hunts',{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },body:JSON.stringify({data :dataURL})
      }).then((res)=>{
        console.log(res);
      })
    };
    // reader.readAsArrayBuffer(file);
    reader.readAsDataURL(file);
   });
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

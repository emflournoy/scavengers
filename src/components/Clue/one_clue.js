import React, { Component } from 'react';
import async from 'async';
import axios from 'axios';

// import Style from '../../App.css';

class CluePage extends Component {
  constructor(props) {
   super(props);
   this.state = {value: '',
    clue_description:''};

   this.handleChange = this.handleChange.bind(this);
  //  this.handleSubmit = this.handleSubmit.bind(this);
 }

 handleChange(event) {
   let userId = window.document.cookie
   let endpoint = this.state.clue_url;
   let classCheck = this.state.clue_class;
   let file = event.target.files[0];
   let data = new FormData();
   data.append('file', file);
   data.append('name', {'name': 'Image to Classify'});
   console.log(data);
   this.setState({value: event.target.value},()=>{
    axios.post(`http://localhost:3000/classify/${endpoint}`, { data })
    .then(res=>{
      console.log(res);
        if(!res.data.length){
          console.log('no match')
          return
        }else if(res.data[0].class === classCheck){
          let clueId = window.location.href.substr(window.location.href.lastIndexOf('/')+1);
          console.log('it is the same')
          fetch(`http://localhost:3000/user/${clueId}/?user=${userId}`, {
            method: 'PATCH',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            }
          })
        }
      })
    })
  };


 async componentWillMount(){
   let clueId = window.location.href.substr(window.location.href.lastIndexOf('/')+1);
   let res = await fetch(`http://localhost:3000/hunts/clues/${clueId}`, {
     method: 'GET',
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
     }
   })

   let jsonResponse = await res.json();

   this.setState({
     clue_url: jsonResponse.photo_url,
     clue_class: jsonResponse.photo_class,
     clue_description: jsonResponse .description
   },()=>{
     console.log(this.state);
   })
 }

  render(){
    return (
      <div className='body'>
        <div className='nav'>
        </div>
        <h1>{this.state.clue_description}</h1>
        <button className='lgbutton'>
          <input type="file" accept="image/*" capture="camera" value={this.state.value} onChange={this.handleChange}/>
        </button>
      </div>
    )
  }
}



export default CluePage;

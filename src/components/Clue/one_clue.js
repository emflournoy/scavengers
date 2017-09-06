import React, { Component } from 'react';
import async from 'async';
import axios from 'axios';
import { Link } from 'react-router-dom';
import home_logo from '../../images/home_logo.png';
import unchecked from '../../images/magnifying_glass.png';
// import unchecked from '../../images/unchecked.png';
import wrongImg from '../../images/x-mark.png';
import rightImg from '../../images/check-mark.png';

// import Style from '../../App.css';

class CluePage extends Component {
  constructor(props) {
   super(props);
   this.state = {value: '',
    clue_description:'',
    resultPhoto: `${unchecked}`};

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
   this.setState({value: event.target.value},()=>{
    axios.post(`http://localhost:3000/classify/${endpoint}`, data)
    .then(res=>{
      console.log(res, endpoint);
        if(!res.data.length){
          console.log('no match')
          this.setState({resultPhoto: `${wrongImg}`})
          return
        }else if(res.data[0].class === classCheck){
          let clueId = window.location.href.substr(window.location.href.lastIndexOf('/')+1);
          console.log('it is the same')
          this.setState({resultPhoto: `${rightImg}`})
          fetch(`http://localhost:3000/user/${clueId}/?user=${userId}`, {
            method: 'PATCH',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            }
          }).then(()=>{
            setTimeout(function () {
              let href = window.location.href;
              let newHref = href.slice(0, href.indexOf('/CluePage/'));
              window.location.href = newHref + '/HuntPage/1'
            }, 800);
          })
        } else {
          this.setState({resultPhoto: `${wrongImg}`})
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
     clue_description: jsonResponse.description
   },()=>{
     console.log(this.state);
   })
 }

  render(){
    return (
      <div className='body'>
        <div className='nav'>
          <h2>ScaVengerS</h2>
          <Link to='/LandingPage'>
            <img src={home_logo} className="home-logo"></img>
          </Link>
        </div>
        <h1 className='clue-des'>{this.state.clue_description}</h1>
        <div className='resultPhoto hide'>
          <img src={this.state.resultPhoto}></img>
        </div>
        <button className='lgbutton'>
          <input className='image-input' type="file" accept="image/*" capture="camera" value={this.state.value} onChange={this.handleChange}/>
        </button>
      </div>
    )
  }
}



export default CluePage;

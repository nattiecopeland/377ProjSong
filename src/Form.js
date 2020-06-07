import React, { Component } from 'react'
import axios from 'axios';
import {Redirect} from "react-router-dom";

class Form extends Component {
   state = {
      Artist: '',
      Name: '',
      Key: '',
      BPM: '',
      username: '',
      logged_in: false,
      reported: false
   }
    constructor(props) {
        super(props);

        this.state = {
            Artist: '',
            Name: '',
            Key: '',
            BPM: '',
            username: props.username,
            logged_in: (props.username!==''),
            reported: false
        }
    }


   handleChange = event => {
      const {name, value} = event.target

      this.setState({
         [name]: value,
      })
   }
   submitForm = () => {
      this.handleSubmit(this.state)
      this.setState(this.initialState)
   }

   makePostCall(song) {
      return axios.post('http://localhost:5000/songs', song)
       .then(function (response) {
         console.log(response);
         return response;
      })
      .catch(function (error) {
       console.log(error);
     });
   }
   
   handleSubmit = song => {
      this.makePostCall(song)
   }
   

   render() {
      const { Artist, Name, Key, BPM } = this.state;

      if(!this.state.logged_in)
          return(<Redirect to='/' />)
      else
          return (
             <form>
                <h1>Add a song to the Database with this form!</h1>
                <label htmlFor="Artist">Artist</label>
                <input
                   type="text"
                   name="Artist"
                   id="Artist"
                   value={Artist}
                   onChange={this.handleChange} />
                <label htmlFor="Name">Name</label>
                <input
                   type="text"
                   name="Name"
                   id="Name"
                   value={Name}
                   onChange={this.handleChange} />
                <label htmlFor="Key">Key</label>
                <input
                   type="text"
                   name="Key"
                   id="Key"
                   value={Key}
                   onChange={this.handleChange} />
                <label htmlFor="BPM">BPM</label>
                <input
                   type="text"
                   name="BPM"
                   id="BPM"
                   value={BPM}
                   onChange={this.handleChange} />
                <input type="button" value="Submit" onClick={this.submitForm} />
             </form>
          );
   }

}

export default Form;

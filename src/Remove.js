import React, { Component } from 'react'
import axios from 'axios';
//import {Redirect} from "react-router-dom"

class Remove extends Component {
    state = {
      ID: ''
    }

    constructor(props) {
      super(props);
 
      this.state = {
         ID: ''
      }
    }
    
    handleChange = event => {
        const {name, value} = event.target

        this.setState({
            [name]: value,
        })
    }

    submitForm = event => {
       this.makeDeleteCall()
       event.preventDefault()
    }
    
    makeDeleteCall() {
       var id;
       id = this.state.ID;
       axios.delete('http://localhost:5000/songs/' + id)
       .then(function(response) {
           console.log(response);
           return (response.status === 200);
       })
       .catch(function (error) {
           console.log(error);
       })
    }

    render() {
       const { ID } = this.state;
   
       return(
           <form>
               <h1> Remove a song from the database by ID with this form </h1>
               <label htmlFor="ID">ID</label>
               <input
                  type="text"
                  name="ID"
                  id="ID"
                  value={ID}
                  onChange={this.handleChange} />
               <input type="button" value="Submit" onClick={this.submitForm} />
           </form>
       );
   }
}

export default Remove

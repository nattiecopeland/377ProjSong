import React, { Component } from 'react';
import axios from 'axios';
import Table from "./Table";
import {Redirect} from "react-router-dom";


class UserPage extends Component {

   state = {
      username : "",
      favorites : []
   }
   constructor(props) {
       super(props);

       this.state = {
           username: props.username,
           favorites: [],
       }
       this.getUserFavorites()
   }
    async getUserFavorites(event) {
        await axios.get('http://localhost:5000/users', {params: {username : this.state.username, get_favorites:true}})
            .then(response => {
                console.log(response)
                this.setState({favorites : response.data.song_list});
            })
            .catch(function (error) {
                console.log(error);
            });

    }

   render() {
       if(this.state.username==='')
           return(<Redirect to='/' />)
       else
          return(
             <>
                <h1> Welcome, {this.state.username} </h1>
                <h2> Here are your favorite songs </h2>
                <div className="table">
                  <Table current_user={this.state.username} songData={this.state.favorites} />
                </div>
             </>
          )
   }
}
 
export default UserPage

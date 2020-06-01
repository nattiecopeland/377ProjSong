import React, { Component } from 'react';
import axios from 'axios';
import Table from "./Table";


class UserPage extends Component {

   state = {
      username : "",
      favorites : []
   }
   constructor(props) {
       super(props);

       this.state = {username: props.username,favorites: []}
   }

   render() {
      return(
         <>
            <h1> Welcome, {this.state.username} </h1>
            <h2> Here are your favorite songs </h2>
            <div className="table">
              <Table songData={this.state.favorites} />
            </div>
         </>
      )
   }
}
 
export default UserPage

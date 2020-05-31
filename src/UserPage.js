import React, { Component } from 'react';
import {useLocation} from "react-router-dom";
import axios from 'axios';
import Table from "./Table";
class UserPage extends Component {

   state = {
      userName : "full_sender_100632",
      favorites : []
   }

   render() {
      return(
         <>
            <h1> Welcome, "{this.state.userName}" </h1>
            <h2> Here are your favorite songs </h2>
            <div className="table">
              <Table songData={this.state.favorites} />
            </div>
         </>
      )
   }
}
 
export default UserPage

import React, { Component } from 'react'
import Song from "./Song";
import axios from "axios";


const TableHeader = () => {
   return (
      <thead>
         <tr>
            <th>Artist</th>
            <th>Name</th>
            <th>Key</th>
            <th>BPM</th>
            <th>Page</th>
         </tr>
      </thead>
   )
}

class Table extends Component {
    state = {
        page : "resultsPage",
        current_user : ""
    }

    constructor(props) {
        super(props);
        this.state = {
            page : "resultsPage",
            current_user : props.current_user
        }
    }


    TableBody = props => {
    const rows = props.songData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.Artist}</td>
                <td>{row.Name}</td>
                <td>{row.Key}</td>
                <td>{row.BPM}</td>
                <td>
                    <input type="button" value="link" onClick={() => {this.goToSong(row)}}/>
                </td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
  }

  goToSong = element => {
      this.setState({
          page: "songPage",
          row: element
      })
  }

  returnToResults = () => {
        this.setState({
        page: "resultsPage"
        })
  }

  addFavorite = () => {
      axios.patch('http://localhost:5000/users',{},{params : {username:this.props.current_user, _id:this.state.row._id}})
          .then(function(response) {
              console.log(response);
              return (response.status === 200);
          })
          .catch(function (error) {
              console.log(error);
          })
  }

  reportSong = () => {
      axios.patch('http://localhost:5000/songs',{},{params : {_id : this.state.row._id}})
          .then(function(response) {
              console.log(response);
              return (response.status === 200);
          })
          .catch(function (error) {
              console.log(error);
          })
  }

  render() {
    const {songData} = this.props
 
    return (
      <>
        {this.state.page==="resultsPage" &&
        <>
            <table>
            <TableHeader />
            <this.TableBody songData={songData} />
            </table>
        </>}
        {this.state.page==="songPage" &&
        <>
            <Song Name={this.state.row.Name} Artist={this.state.row.Artist} Key={this.state.row.Key} BPM={this.state.row.BPM} />
            {this.state.current_user !== '' &&
                <>
                    <input type="button" value="Favorite" onClick={this.addFavorite}/>{' '}
                    <input type="button" value="Report" onClick={this.reportSong}/>{' '}
                </>
            }
            <input type="button" value="Return to list" onClick={() => {this.returnToResults()}}/>
        </>}
      </>
    )
  }
}

export default Table

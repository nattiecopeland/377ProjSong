import React, { Component } from 'react'
import Song from "./Song";


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
    state = { page : "resultsPage"}
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
            <input type="button" value="Return to results" onClick={() => {this.returnToResults()}}/>
        </>}
      </>
    )
  }
}

export default Table

import React, { Component } from 'react'



const TableHeader = () => {
   return (
      <thead>
         <tr>
            <th>Artist</th>
            <th>Name</th>
            <th>Key</th>
            <th>BPM</th>
         </tr>
      </thead>
   )
}

const TableBody = props => {
   const rows = props.songData.map((row, index) => {
      return (
         <tr key={index}>
            <td>{row.Artist}</td>
            <td>{row.Name}</td>
            <td>{row.Key}</td>
            <td>{row.BPM}</td>
         </tr>
      )
   })

   return <tbody>{rows}</tbody>
}

class Table extends Component {
  render() {
    const {songData} = this.props
 
    return (
      <>
        <h1>Displaying results for Key:Am</h1>
        <table>
          <TableHeader />
          <TableBody songData={songData} />
        </table>
      </>
    )
  }
}

export default Table

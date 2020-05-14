import React, { Component } from 'react'
import Table from './Table'

class App extends Component {
   render() {
      const songs = [
         {
            Artist: 'The Sponges',
            Name: 'Clean Yo Shit',
            Key: 'Am',
            BPM:'90',
         },
         {
            Artist: 'Lame Impala',
            Name: 'The Less I know the Worse',
            Key: 'Am',
            BPM: '110',
         },
         {
            Artist: 'Insert Song Name Here',
            Name:'Songy Song Song',
            Key:'Am',
            BPM: '120',
         },
         {
            Artist: 'Phil and the Boys',
            Name: 'Food Fight',
            Key: 'Am',
            BPM: '100',
         },
      ]

      return (
         <div className="App">
           <h1>Displaying results for Key:Am</h1>
           <Table songData = {songs} />
         </div>
      )
   }
}

export default App;

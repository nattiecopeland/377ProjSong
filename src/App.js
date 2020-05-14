import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component {
   state = {
      songs : [
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
   ],
   }
   render(){
      const { songs } = this.state
      
   return (
         <div className="App">
           <h1>Displaying results for Key:Am</h1>
           <Table songData = {songs} />
           <h1>Add a song to the Database with this form!</h1>
           <Form />
         </div>
      )
   }
}

export default App;

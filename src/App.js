import React, { Component } from 'react'
import HomePage from './HomePage'
import Table from './Table'
import Form from './Form'

class App extends Component {
   state = {
      page : "home",
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

   changePageHome = () => {
      this.setState({
         ...this.state,
         page: "home"
      })
   }
   changePageSearch = () => {
      this.setState({
         ...this.state,
         page: "search"
      })
   }
   changePageAdd = () => {
      this.setState({
         ...this.state,
         page: "add"
      })
   }

   render(){
      const { songs } = this.state

      return (
         <div className="App">
            <>
               <button onClick={this.changePageHome}>home</button>{' '}
               <button onClick={this.changePageSearch}>search</button>{' '}
               <button onClick={this.changePageAdd}>add</button>{' '}
            </>
            {this.state.page == "home" && <HomePage />}
            {this.state.page == "search" && <Table songData = {songs} />}
            {this.state.page == "add" && <Form />}
         </div>
      )
   }
}

export default App;

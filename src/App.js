import React, { Component } from 'react'
import HomePage from './HomePage'
import SearchPage from './searchPage'
import Form from './Form'
import Song from './Song'

class App extends Component {
   state = {
      page : "home"
   }

   handleChange = event => {
      const {name} = event.target

      this.setState({
          page: name
      })
   }

   render(){
      return (
         <div className="App">
            <>
               <button name="home" onClick={this.handleChange}>home</button>{' '}
               <button name="search" onClick={this.handleChange}>search</button>{' '}
               <button name="add" onClick={this.handleChange}>add</button>{' '}
            </>
            {this.state.page === "home" && <HomePage />}
            {this.state.page === "search" && <SearchPage />}
            {this.state.page === "add" && <Form />}
         </div>
      )
   }
}

export default App;

import React, {Component} from 'react'
import Table from './Table'

class SearchPage extends Component {

    state = {
        searchResult : [
           {
              Name: 'Hey',
              Artist: 'byeb', 
              Key: 'am',
              BPM: '120',
           },
           {
              Name: 'Yo',
              Artist: 'B',
              Key: 'dm',
              BPM: '120',
           },],
        searchQuery : "Artist",
        searchValue : ''
    }

    handleChange = event => {
        const {name, value} = event.target

        this.setState({
            [name]: value,
        })
    }


    submitSearchRequest = (event ) => {
        //This is where the page will submit a search to the backend
        //After this it should show the search result page, formatted under Table.js

        //Current behavior is to mimic the query and value back to the user
        //alert(this.state.searchQuery + " : " + this.state.searchValue)
        event.preventDefault()
        
    }


    render() {
        return(
            <>
               <form onSubmit={this.submitSearchRequest}>
                 <h1>Search for a song</h1>
                 <label>Search by:</label>
                 <select name="searchQuery"
                       searchQuery={this.state.searchQuery}
                       onChange={this.handleChange}>
                    <option searchQuery="Artist">Artist</option>
                    <option searchQuery="Key">Key</option>
                    <option searchQuery="BPM">BPM</option>
                    <option searchQuery="Name">Name</option>
                 </select>
                 <label>Search for:</label>
                 <input type="text"
                       name="searchValue"
                       onChange={this.handleChange} />
                 <input type="submit" value="Submit" />
               </form>
               <div className="table">
                 <Table songData={this.state.searchResult} searchTerm={this.state.searchQuery} searchWord={this.state.searchValue} goTo={this.goTo}/>
               </div>
            </>
        )
    }

}

export default SearchPage

import React, {Component} from 'react'

class SearchPage extends Component {

    state = {
        searchQuery : "Artist",
        searchValue : ''
    }

    handleChange = event => {
        const {name, value} = event.target

        this.setState({
            [name]: value,
        })
    }

    submitSearchRequest = (event) => {
        //This is where the page will submit a search to the backend
        //After this it should show the search result page, formatted under Table.js

        //Current behavior is to mimic the query and value back to the user
        alert(this.state.searchQuery + " : " + this.state.searchValue)
        event.preventDefault()
    }


    render() {
        return(
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
        )
    }

}

export default SearchPage
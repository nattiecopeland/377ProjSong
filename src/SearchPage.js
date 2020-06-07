import React, {Component} from 'react'
import Table from './Table'
import axios from 'axios';

class SearchPage extends Component {

    state = {
        searchResult : [],
        searchQuery : "Artist",
        searchValue : '',
        current_user: ""
    }

    constructor(props) {
        super(props);
        this.state = {
            searchResult : [],
            searchQuery : "Artist",
            searchValue : '',
            current_user: props.current_user
        }
    }

    handleChange = event => {
        const {name, value} = event.target

        this.setState({
            [name]: value,
        })
    }

    makeGetCall(event) {

      axios.get('http://localhost:5000/songs', {params: { [this.state.searchQuery] : this.state.searchValue}})
       .then(response => {
         console.log(response);
         this.setState({searchResult : response.data.song_list});
       })
       .catch(function (error) {
         console.log(error);
       });
    }

    submitSearchRequest = (event) => {
       this.makeGetCall(event);
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
                 <Table current_user={this.state.current_user} songData={this.state.searchResult} searchTerm={this.state.searchQuery} searchWord={this.state.searchValue} goTo={this.goTo}/>
               </div>
            </>
        )
    }

}

export default SearchPage

import React, {Component} from 'react'
import Table from './Table'
import axios from 'axios';

class SearchPage extends Component {

    state = {
        searchResult : [],
        searchQuery : "Artist",
        searchValue : "",
          
    }

    handleChange = event => {
        const {name, value} = event.target

        this.setState({
            [name]: value,
        })
    }

    makeGetCall(param) {
      axios.get('http://localhost:5000/songs', param)
       .then(res => {
         const song_list = res.data.song_list;
         this.setState({ searchResult : song_list });
       })
       .catch(function (error) {
         console.log(error);
       });
    }

    submitSearchRequest = (event) => {
       const {name, value} = event.target
       var param;
       const val = this.state.searchValue
       if(this.state.searchQuery === "Artist")
       {
          param = { "artist" : val };
          this.makeGetCall(param);
       }
       else if(this.state.searchQuery === "Name")
       {
          param = { name : val };
          this.makeGetCall(param);
       }
       else if(this.state.searchQuery === "BPM")
       {
          param = { bpm : val };
          this.makeGetCall(param);
       }
       else if(this.state.searchQuery === "Key")
       {
          param = { key : val };
          this.makeGetCall(param);
       }
       else
       {
          const song_list = this.makeGetCall();
       }
       event.preventDefault();
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

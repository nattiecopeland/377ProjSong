import React, { Component } from 'react'

class Form extends Component {
   initialState = {
      Artist: '',
      Name: '',
      Key: '',
      BPM: '',
   }

   state = this.initialState

   handleChange = event => {
      const {name, value} = event.target

      this.setState({
         [name]: value,
      })
   }
   
   render() {
      const { Artist, Name, Key, BPM } = this.state;

      return (
         <form>
            <label htmlFor="Artist">Artist</label>
            <input
               type="text"
               name="Artist"
               id="Artist"
               value={Artist}
               onChange={this.handleChange} />
            <label htmlFor="Name">Name</label>
            <input
               type="text"
               name="Name"
               id="Name"
               value={Name}
               onChange={this.handleChange} />
            <label htmlFor="Key">Key</label>
            <input
               type="text"
               name="Key"
               id="Key"
               value={Key}
               onChange={this.handleChange} />
            <label htmlFor="BPM">BPM</label>
            <input
               type="text"
               name="BPM"
               id="BPM"
               value={BPM}
               onChange={this.handleChange} />
            <input type="button" value="Submit" />
         </form>
      );
   }

}

export default Form;

import React, {Component} from "react";
import axios from 'axios';
import {Redirect} from "react-router-dom";

class CreateAccount extends Component {
    initialState = {
        email:'',
        username:'',
        password:'',
        passConfirm:'',
        favorites: {},
        submitted:false,
        valid:false
    }

    state = this.initialState

    handleChange = event => {
        const {name, value} = event.target

        this.setState({
            [name]: value,
        })
    }

    
    handleSubmit = () => {
        this.makeGetCall()
        setTimeout(this.submitForm, 1000)
   }

    submitForm = () => {
        if(this.state.password === this.state.passConfirm) {
            if(this.state.valid === true)
            {
               this.makePostCall(this.state)
               this.setState({submitted: true})
            }
            else
            {
               alert("Username already exists!")
            }
        }
        else
            alert("Passwords do not match!")
    }

    makeGetCall() {
        return axios.get('http://localhost:5000/users', {params: {username: this.state.username}})
        .then(response => {
           if(response.data.user)
           {
              this.setState({valid: false})
           }
           else
           {
              this.setState({valid: true})
           }
        })
        .catch(function (error) {
          console.log(error);
       })
    }

    makePostCall(account) {
        return axios.post('http://localhost:5000/users', account)
            .then(function (response) {
                console.log(response);
                return response;
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    render() {
        if(this.state.submitted)
            return(<Redirect to="/login"></Redirect>)
        else
            return(
                <form>
                    <h1>Create an Account</h1>
                    <label>E-Mail</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        onChange={this.handleChange}/>
                    <label>Username</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        onChange={this.handleChange}/>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        onChange={this.handleChange}/>
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        name="passConfirm"
                        id="passConfirm"
                        onChange={this.handleChange}/>
                    <input type="button" value="Submit" onClick={this.handleSubmit} />
                </form>
            )
    }
}

export default CreateAccount

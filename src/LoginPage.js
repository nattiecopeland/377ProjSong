import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import axios from 'axios';
class LoginPage extends Component{

    state = {
        username:'',
        password:'',
        logged_in:false,
        correct_login:false,
    }
    constructor(props) {
        super(props);

        this.state = {
            username: props.username,
            password: '',
            logged_in: (props.username!=='')
        }
    }



    handleChange = event => {
        const {name, value} = event.target
        this.setState({
            [name]: value,
        })
    }


    async makeGetCall () {
       return await axios.get('http://localhost:5000/users', {params: { username : this.state.username, password : this.state.password}})
       .then(response => {
          if(response.data.user)
          {
             this.setState({correct_login:true});
          }
       })
       .catch(function (error) {
         console.log(error);
       })
    }
           

    handleSubmit = () =>{
        this.makeGetCall();
        setTimeout(this.submitForm, 1000);
    }
 
    submitForm = () =>{
        if(this.state.correct_login === true)
        {
           this.props.onChangeValue(this.state.username)
           this.setState({logged_in:true})
        }
        else
        {
           alert('Incorrect username/password')
        }
    }

    render(){
        if(this.state.logged_in)
            return(<Redirect to="/user" />)
        else
            return(
                <form>
                    <h1>Login</h1>
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
                    <input type="button" value="Submit" onClick={this.handleSubmit} />
                </form>
            )
    }
}

export default LoginPage

import React, {Component} from "react";
import {Redirect} from "react-router-dom";

class LoginPage extends Component{

    state = {
        username:'',
        password:'',
        logged_in:false
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

    submitForm = () => {
        //check if username/password match. if they do call this function
        this.props.onChangeValue(this.state.username)
        this.setState({logged_in:true})
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
                    <input type="button" value="Submit" onClick={this.submitForm} />
                </form>
            )
    }
}

export default LoginPage
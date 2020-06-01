import React, {Component} from "react";

class LoginPage extends Component{

    state = {
        username:'',
        password:''
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
    }

    render(){
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
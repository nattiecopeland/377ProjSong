import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import HomePage from "./HomePage";
import SearchPage from "./SearchPage";
import Form from "./Form";
import CreateAccount from "./CreateAccount";
import Song from "./Song";
import UserPage from "./UserPage";
import LoginPage from "./LoginPage";

class Navigation extends Component {

    state = {
        current_user : ""
    }

    logout = event => {
        this.setState({current_user : ''})
    }

    handleChangeValue = userName => {
        this.setState({current_user : userName})
    }

    render() {
        return(
            <Router>
                <div>
                    <Link to="/">
                        <button>
                            Home
                        </button>
                    </Link>{' '}
                    <Link to="/search">
                        <button>
                            Search
                        </button>
                    </Link>{' '}

                    {this.state.current_user === '' &&
                        <>
                            <Link to="/create-account">
                                <button>
                                    Create Account
                                </button>
                            </Link>{' '}
                            <Link to="/login">
                                <button>
                                    Login
                                </button>
                            </Link>{' '}
                        </>
                    }
                    {this.state.current_user !== '' &&
                        <>
                            <Link to="/add">
                                <button>
                                    Add
                                </button>
                            </Link>{' '}
                            <Link to="/user">
                                <button>
                                    Userpage
                                </button>
                            </Link>{' '}
                            <Link to="/">
                                <button onClick={this.logout}>
                                    Logout
                                </button>
                            </Link>
                        </>
                    }

                    <hr />

                    <Switch>
                        <Route exact path="/">
                            <HomePage />
                        </Route>
                        <Route path="/search">
                            <SearchPage />
                        </Route>
                        <Route path="/add">
                            <Form />
                        </Route>
                        <Route path="/create-account">
                            <CreateAccount />
                        </Route>
                        <Route path="/login">
                            <LoginPage onChangeValue={this.handleChangeValue}/>
                        </Route>
                        <Route path="/user">
                            <UserPage userName={this.state.current_user}/>
                        </Route>
                        <Route path="/song">
                            <Song />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default Navigation

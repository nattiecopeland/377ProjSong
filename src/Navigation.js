import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import HomePage from "./HomePage";
import SearchPage from "./SearchPage";
import Form from "./Form";
import CreateAccount from "./CreateAccount";
import Song from "./Song";
import UserPage from "./UserPage";
import LoginPage from "./LoginPage";
import Remove from "./Remove";

class Navigation extends Component {

    state = {
        current_user : ""
    }

    logout = event => {
        this.setState({current_user : ''})
    }

    changeUser = username => {
        this.setState({current_user : username})
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
                    {this.state.current_user === 'Admin' &&
                        <>
                            <Link to="/remove">
                                <button>
                                    Remove
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
                            <Form username={this.state.current_user}/>
                        </Route>
                        <Route path="/create-account">
                            <CreateAccount />
                        </Route>
                        <Route path="/login">
                            <LoginPage
                                username={this.state.current_user}
                                onChangeValue={this.changeUser}/>
                        </Route>
                        <Route path="/user">
                            <UserPage username={this.state.current_user}/>
                        </Route>
                        <Route path="/song">
                            <Song />
                        </Route>
                        <Route path="/remove">
                            <Remove />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default Navigation

import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import HomePage from "./HomePage";
import SearchPage from "./SearchPage";
import Form from "./Form";
import CreateAccount from "./CreateAccount";
import Song from "./Song";

class Navigation extends Component {
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
                    <Link to="/add">
                        <button>
                            Add
                        </button>
                    </Link>{' '}
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
                    <Link to="/user">
                        <button>
                            Userpage
                        </button>
                    </Link>{' '}

                    <button onClick={this.logout}>Logout</button>

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
                            <></>
                        </Route>
                        <Route path="/user">
                            <></>
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
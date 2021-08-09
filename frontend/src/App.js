import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import PostDetails from './components/posts/PostDetails';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import CreatePost from './components/posts/CreatePost';
import './components/editing/styles/App.scss';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className='App'>
                    <Navbar />
                    <Switch>
                        <Route exact path='/' component={Dashboard} />
                        <Route path='/login' component={Login} />
                        <Route path='/signup' component={SignUp} />
                        <Route path='/create' component={CreatePost} />
                        <Route path='/project/:id' component={PostDetails} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
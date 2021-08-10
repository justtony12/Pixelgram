import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import CreatePost from './components/posts/CreatePost';
import './components/editing/styles/App.scss';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className='bg-image'> </div>

                <div className='links'>
                    <Navbar />
                        <Switch>
                            <Route path='/login' component={Login} />
                            <Route path='/signup' component={SignUp} />
                            <Route path='/create' component={CreatePost} />
                        </Switch>
                </div>
               
            </BrowserRouter>
        );
    }
}

export default App;
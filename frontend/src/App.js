import React, { Component } from 'react';
import './components/editing/styles/App.scss';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import Home from './components/posts/Home';
import Editor from './components/editing/Editor';
import Create from './components/posts/CreatePost';
import Post from './components/posts/PostSummary';

class App extends Component {
    render() {
        return (
            <Router>
                <div className='Navbar'>
                    <Link to='/'><button className='button'>Home</button></Link>
                    <Link to='/creator'><button className='button'>Creator</button></Link>
                    <Link to='/upload'><button className='button'>Upload</button></Link>
                </div>

                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/creator' component={Editor} />
                    <Route exact path='/upload'component={Create} />
                    <Route exact path='/post/:post_id'component={Post} />
                </Switch>
            </Router>
        );
    }
}

export default App;
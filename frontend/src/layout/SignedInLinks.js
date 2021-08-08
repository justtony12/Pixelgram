import React from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import Editor from '../components/editing/Editor'
// import Home from '../components/userContent/Home'
import Feed from '../components/userContent/Feed'
import Post from '../components/userContent/Post'
// import Logout from '../components/auth/Logout'
import Create from '../components/userContent/Create'

const SignedIn = () => {
    return (
        <Router>
            <div className='App'>
                {/* <Link to='/home'><button className='button'>Home</button></Link> */}
                <Link to='/editor'><button className='button'>Editor</button></Link>
                <Link to='/feed'><button className='button'>Feed</button></Link>
                {/* <Link to='/logout'><button className='button'>Logout</button></Link> */}
            </div>

            <Switch>
                {/* <Route exact path='/home' component={Home} /> */}
                <Route exact path='/editor' component={Editor} />
                <Route exact path='/feed' component={Feed} />
                {/* <Route exact path='/logout'component={Logout} /> */}
                <Route exact path='/create'component={Create} />
                <Route exact path='/post/:post_id'component={Post} />
            </Switch>
        </Router>
    )
}

export default SignedIn;
import React from 'react'
import '../styles/App.scss'
import Editor from './Editor'
import Home from './Home'
import Feed from './Feed'
import Login from './Login'
import SignUp from './SignUp'
import Post from './Post'
import {Route, BrowserRouter as Router, Link, Switch} from 'react-router-dom'

const App = () => {
    return(
        <Router>
            <div className='App'>
                <Link to='/home'><button className='button'>Home</button></Link>
                <Link to='/editor'><button className='button'>Editor</button></Link>
                <Link to='/feed'><button className='button'>Feed</button></Link>
                <Link to='/'><button className='button'>Login</button></Link>
                <Link to='/sign-up'><button className='button'>Sign Up</button></Link>
            </div>

            <Switch>
                <Route exact path='/home' component={Home} />
                <Route exact path='/editor' component={Editor} />
                <Route exact path='/feed' component={Feed} />
                <Route exact path='/' component={Login} />
                <Route exact path='/sign-up' component={SignUp} />
                <Route exact path='/:post_id'component={Post} />
            </Switch>
            
        </Router>
    )
}

export default App
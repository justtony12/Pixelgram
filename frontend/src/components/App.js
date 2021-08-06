import React from 'react'
import '../styles/App.scss'
import Editor from './Editor'
import Home from './Home'
import Feed from './Feed'
import Login from './Login'
import SignUp from './SignUp'
import Post from './Post'
import {Route, BrowserRouter as Router, Link} from 'react-router-dom'

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

            <Route path='/home' exact component={Home} />
            <Route path='/editor' exact component={Editor} />
            <Route path='/feed' exact component={Feed} />
            <Route path='/' exact component={Login} />
            <Route path='/sign-up' exact component={SignUp} />
            <Route path='/:post_id' component={Post} />
        </Router>
    )
}

export default App
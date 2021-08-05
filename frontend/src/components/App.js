import React from 'react'
import '../styles/App.scss'
import Editor from './Editor'
import Home from './Home'
import Feed from './Feed'
import Login from './Login'
import {Route, BrowserRouter as Router, Link} from 'react-router-dom'

const App = () => {
    return(
        <Router>
            <div className='App'>
                <Link to='/home'><button className='button'>Home</button></Link>
                <Link to='/editor'><button className='button'>Editor</button></Link>
                <Link to='/feed'><button className='button'>Feed</button></Link>
                <Link to='/'><button className='button'>Login</button></Link>
            </div>

            <Route path='/home' exact component={Home}></Route>
            <Route path='/editor' exact component={Editor}></Route>
            <Route path='/feed' exact component={Feed}></Route>
            <Route path='/' exact component={Login}></Route>
            
        </Router>
    )
}

export default App
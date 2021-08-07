import React from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import Login from '../components/auth/Login'
import SignUp from '../components/auth/SignUp'

const SignedOut = () => {
    return (
        <Router>
            <div>
                <Link to='/'><button className='button'>Login</button></Link>
                <Link to='/sign-up'><button className='button'>Sign Up</button></Link>
            </div>
            
            <Switch>
                <Route exact path='/' component={Login} />
                <Route exact path='/sign-up' component={SignUp} />
            </Switch>
        </Router>
    )
}

export default SignedOut;
import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import './components/editing/styles/App.scss';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Dashboard from './components/dashboard/Dashboard';
// import ProjectDetails from './components/projects/ProjectDetails';
// import Login from './components/auth/Login';
// import SignUp from './components/auth/SignUp';
// import Create from './components/projects/Create';
// import Home from './components/projects/Home';

class App extends Component {
    render() {
        return (
            <Navbar />
            // <BrowserRouter>
            //     <div className='App'>
            //         <Navbar />
            //         <Switch>
            //             {/* <Route exact path='/' component={Dashboard} /> */}
            //             <Route path='/home' component={Home} />
            //             <Route path='/project/:id' component={ProjectDetails} />
            //             <Route path='/login' component={Login} />
            //             <Route path='/signup' component={SignUp} />
            //             <Route path='/create' component={Create} />
            //         </Switch>
            //     </div>
            // </BrowserRouter>
        );
    }
}

export default App;
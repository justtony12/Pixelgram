import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import './components/editing/styles/App.scss';

class App extends Component {
    render() {
        return (
            <div className='app'>
                <Navbar />
            </div>
        );
    }
}

export default App;
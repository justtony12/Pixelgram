import React, { Component } from 'react';

class Home extends Component {
    state = {
        name: 'Marcus',
        age: 24
    }

    render() {
        return (
            <div className="userHome" >
                <h1>Hello, { this.state.name }!</h1>
                <h2>You are now {this.state.age} years old!</h2>
            </div>
        )
    }
}

export default Home;
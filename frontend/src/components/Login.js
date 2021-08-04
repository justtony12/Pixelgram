import React, { Component } from 'react';

class Login extends Component {
    state = {
        name: "Marcus"
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div>

                <h1>Hello, {this.state.name}!</h1>
                
                <form onSubmit={this.handleSubmit} >
                    <label>Username:</label>
                    <input type="text" /><br/>

                    <label>Email:</label>
                    <input type="text" /><br/>

                    <label>Password:</label>
                    <input type="text" /><br/>

                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Login;
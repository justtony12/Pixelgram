import React, { Component } from 'react';

class Login extends Component {
    state = {
        username: null,
        email: null,
        password: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <div>

                <h1>Login Below</h1>

                <form onSubmit={this.handleSubmit} >
                    <label>Username:</label>
                    <input type="text" id='name' onChange={this.handleChange} /><br/>

                    <label>Email:</label>
                    <input type="text" id='email' onChange={this.handleChange} /><br/>

                    <label>Password:</label>
                    <input type="text" id='password_digest' onChange={this.handleChange} /><br/>

                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Login;
import React, { Component } from 'react';

class Login extends Component {
    state = {
        email: '',
        password: ''
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
                <form onSubmit={this.handleSubmit} >
                    <h1>Login Below</h1>

                    <label>Email:</label>
                    <input type="email" id='email' onChange={this.handleChange} /><br/>

                    <label>Password:</label>
                    <input type="password" id='password' onChange={this.handleChange} /><br/>

                    <button>Login</button>
                </form>
            </div>
        )
    }
}

export default Login;
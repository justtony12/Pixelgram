import React, { Component } from 'react';

class Login extends Component {
    state = {
        username: '',
        email: '',
        password: ''
    }

    handleChange = (e) => {
        console.log(e)
    }

    handleSubmit = (e) => {
        console.log(e)
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
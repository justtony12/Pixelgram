import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.username]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        let user = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }

        fetch('https://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(resp => resp.json())
        .then(data => console.log(data))
    }

    render() {
        return (
            <div>
                <h1>Login Below</h1>

                <form onSubmit={this.handleSubmit} >
                    <label>Username:</label>
                    <input type="text" className='username' value={this.state.username} onChange={this.handleChange} /><br/>

                    <label>Email:</label>
                    <input type="text" className='email' value={this.state.email} onChange={this.handleChange} /><br/>

                    <label>Password:</label>
                    <input type="text" className='password' value={this.state.password} onChange={this.handleChange} /><br/>

                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Login;
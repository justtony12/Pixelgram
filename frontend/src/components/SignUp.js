import React, { Component } from 'react';

class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }

    render() {
        return (
            <div>
                <h1>Sign Up Below</h1>

                <form onSubmit={this.handleSubmit} >
                    <label>Username:</label>
                    <input type="text" className='username' value={this.state.username} onChange={this.handleChange} /><br/>

                    <label>Email:</label>
                    <input type="text" className='email' value={this.state.email} onChange={this.handleChange} /><br/>

                    <label>Password:</label>
                    <input type="text" className='password' value={this.state.password} onChange={this.handleChange} /><br/>

                    <button>Sign Up</button>
                </form>
            </div>
        )
    }
}

export default SignUp;
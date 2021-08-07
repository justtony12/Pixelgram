import React, { Component } from 'react';

class SignUp extends Component {
    state = {
        username: '',
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
                    <h1>SignUp Below</h1>

                    <label>Username:</label>
                    <input type="text" id='username' onChange={this.handleChange} /><br/>

                    <label>Email:</label>
                    <input type="email" id='email' onChange={this.handleChange} /><br/>

                    <label>Password:</label>
                    <input type="password" id='password' onChange={this.handleChange} /><br/>

                    <button>SignUp</button>
                </form>
            </div>
        )
    }
}

export default SignUp;
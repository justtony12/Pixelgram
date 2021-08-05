import React, { Component } from 'react';
import '../styles/home.scss'

class Home extends Component {
    state = {
        name: 'Marcus',
        age: 24
    }

    render() {
        return (
            <div className="userHome" >
                <h1>Welcome {this.state.name}!</h1>
                
                <form>
                    <label>Upload Art:</label>
                    <input type="file" name='avatar' /><br />

                    <textarea className='setBox' defaultValue="Write a caption..." /><br />

                    <button className='button' >Post</button>
                </form>
            </div>
        )
    }
}

export default Home;
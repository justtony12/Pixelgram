import React, { Component, Fragment } from 'react';
import '../styles/home.scss'

class Home extends Component {
    constructor() {
        super()
        this.state = {
            CurrentUser: null,
            CurrentAvatar: null,
            posts: []
         }
     
    }

    render() {

        return (
            <div className="userHome" >
                <h1>Welcome User!</h1>
                
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
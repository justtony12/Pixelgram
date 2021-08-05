import React, { Component } from 'react';
import '../styles/home.scss'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

class Home extends Component {
    state = {
       posts: []
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts/')
        .then(res => res.json())
        .then(
            (result) => {
            this.setState({
                posts: result.data
            })
        })
    }

    render() {
        const { posts } = this.state;
        const postList = posts ? (
            posts.map(post => {
                return(
                    <div className='postCard' key={post.id}>
                        <div className='cardContent'>
                            <span className='cardTitle'>{post.title}</span>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className='posts'>No posts yet...</div>
        )

        return (
            <div className="userHome" >
                <h1>Welcome {this.state.name}!</h1>
                
                <form>
                    <label>Upload Art:</label>
                    <input type="file" name='avatar' /><br />

                    <textarea className='setBox' defaultValue="Write a caption..." /><br />

                    <button className='button' >Post</button>
                </form>

                {postList}
            </div>
        )
    }
}

export default Home;
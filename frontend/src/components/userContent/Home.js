import React, { Component } from 'react';
import '../editing/styles/home.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class Home extends Component {
    state = {
        art: '',
        caption: ''
    }

    handleSubmit = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleChange = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    render() {
        const { posts } = this.props;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className='postCard' key={post.id}>
                        <Link to={'/' + post.id} ><span>{post.art}</span></Link>
                        <p>{post.caption}</p>
                    </div>
                )
            })
        ) : (<div>You do not have any posts yet...</div>)

        return (
            <div>
                <h1>Welcome User!</h1>
                
                <form onSubmit={this.handleSubmit} >
                    <h1>Post Your Art Below!</h1>

                    <label>Upload Art:</label>
                    <input type="text" id='art' onChange={this.handleChange} /><br />

                    <textarea
                        id='caption'
                        className='setBox'
                        defaultValue="Write a caption..."
                        onChange={this.handleChange}
                    /><br />

                    <button className='button' >Post</button>
                </form><br/>

                {postList}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home)
import React, { Component } from 'react';
import '../editing/styles/home.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class Home extends Component {
    render() {
        const { posts } = this.props;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className='postCard' key={post.id}>
                        <Link to={'/post/' + post.id} ><span>{post.art}</span></Link>
                        <p>{post.caption}</p>
                    </div>
                )
            })
        ) : (<div>You do not have any posts yet...</div>)

        return (
            <div>
                <h1>Welcome User!</h1>
                <Link to={'/create'}><button className='button' >New Post</button></Link>
                {postList}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.post.posts
    }
}

export default connect(mapStateToProps)(Home);
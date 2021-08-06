import React, { Component } from 'react';
import '../styles/home.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class Home extends Component {

    handleClick = () => {
        this.props.deletePost(this.props.post.id);
    }

    render() {
        const { posts } = this.props;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className='postCard' key={post.id}>
                        <Link to={'/' + post.id} ><span>{post.image}</span></Link>
                        <p>{post.caption}</p>
                    </div>
                )
            })
        ) : (<div>You do not have any posts yet...</div>)

        return (
            <div className="userHome" >
                <h1>Welcome User!</h1>
                
                <form>
                    <label>Upload Art:</label>
                    <input type="file" name='avatar' /><br />

                    <textarea className='setBox' defaultValue="Write a caption..." /><br />

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
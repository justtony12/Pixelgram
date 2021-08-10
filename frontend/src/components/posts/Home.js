import React, { Component } from 'react';
import '../editing/styles/home.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { fetchPosts } from '../../store/actions/postActions';

class Home extends Component {
    render() {

        const postList = this.props.posts.map (
            post => <ul key={post.id}>
                <li>{post.art}</li>
                <li>{post.caption}</li>
            </ul>
        )

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
        posts: state.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: (posts) => dispatch(fetchPosts(posts))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
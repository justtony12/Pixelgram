import React, { Component } from 'react';
import { connect } from 'react-redux'
import { deletePost } from '../userContent/actions/postActions';

class Post extends Component {
    handleClick = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/home');
    }

    render() {
        const post = this.props.post ? (
            <div className='post'>
                <h1>{this.props.post.art}</h1>
                <h2>{this.props.post.caption}</h2>
                <button onClick={this.handleClick} >Delete Post</button>
            </div>
        ) : (<div>Loading post...</div>)

        return (
            <div className='singlePost'>
                {post}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        post: state.posts.find(post => post.id === id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => {dispatch(deletePost(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
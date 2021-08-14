import React, { Component } from 'react';
import { connect } from 'react-redux'
import { deletePost } from '../../store/actions/postActions';
import '../editing/styles/home.scss';
import Houston from './Images/weHaveAProblem.png';

class Post extends Component {
    handleClick = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/home');
    }

    render() {
        console.log(this.props.singlePost)
        const post = this.props.singlePost ? (
            <div>
                <img src={'http://localhost:3000' + this.props.singlePost.art_format.url} alt={this.props.singlePost.art_format.name} />
                <p>{this.props.singlePost.caption}</p>
            </div>
        ) : (
            <div className='home' ><img src={Houston} alt='The ducking servers are down...' /></div>
        );

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
        singlePost: state.posts.find(post => post.id === id),
        loading: state.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => {dispatch(deletePost(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
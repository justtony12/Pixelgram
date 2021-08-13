import React, { Component } from 'react';
import '../editing/styles/home.scss';
import { connect } from 'react-redux';
import { fetchPosts } from '../../store/actions/postActions';
import PostList from './PostList';
import Duck from './Images/duck500.png';

class Home extends Component {

    componentDidMount() {
        this.props.fetchPosts()
    }

    handleLoading = () => {
        if(this.props.loading) {
            return <div className='home' ><img src={Duck} alt='The ducking servers are down...' /></div>
        } else {
            return <PostList myPost={this.props.myPost} />
        }
    }

    render() {
        return (
            <div className='hmm'>
                <div>
                    <h1 className='Welcome'>Welcome To Pixelgram!</h1>
                    {this.handleLoading()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        myPost: state.posts,
        loading: state.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: (posts) => dispatch(fetchPosts(posts))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
import React, { Component } from 'react';
import '../editing/styles/home.scss';
import { connect } from 'react-redux';
import { fetchPosts } from '../../store/actions/postActions';
import PostList from './PostList';

class Home extends Component {

    componentDidMount() {
        this.props.fetchPosts()
    }

    handleLoading = () => {
        if(this.props.loading) {
            return <div>Loading...</div>
        } else {
            // debugger
            return <PostList myPost={this.props.myPost} />
        }
    }

    render() {
        return (
            <div className='posts'>
                <h1>Welcome To Pixelgram!</h1>
                {this.handleLoading()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // debugger
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
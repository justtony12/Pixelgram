import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from './actions/postActions';
import postList from './postList';


import '../editing/styles/home.scss';
import { Link } from 'react-router-dom'

class Home extends Component {
    render() {
        return (null)
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.post.posts
    }
}

export default connect(mapStateToProps)(Home);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from './actions/postActions';
import PostList from './postList';


import '../editing/styles/home.scss';
// import { Link } from 'react-router-dom'

class Home extends Component {
    componentDidMount() {
        this.props.fetchPost()
    }
    
    handleLoading = () => {
        console.log(this.props.loading)
        if(this.props.loading) {
            return <div>Loading Artwork...</div>
        } else {
            return <PostList pixelArt={this.props.pixelArt} />
        }
    }

    render() {
        return (
            <div>
                <h1>Welcome To Pixelgram!</h1>
                {/* <Link to={'/create'}><button className='button' >New Post</button></Link> */}
                {this.handleLoading()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        art: state.art,
        caption: state.caption,
        loading: state.loading
    }
}

export default connect(mapStateToProps, { fetchPost })(Home);
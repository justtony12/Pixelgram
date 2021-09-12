import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../editing/styles/home.scss';
import { Link } from 'react-router-dom';

class PostList extends Component {

    postList = () => {
        return (
            this.props.singlePost.map(post => (
                <div key={post.id} className='home'>
                    <Link to={'/post/' + post.id} >
                        <img
                            src={'http://localhost:3000' + post.art_format.url}
                            alt={post.art_format.name}
                        />
                    </Link>
                    <p className='singleCaption'>{post.caption}</p>
                </div>
            )
            )
        )
    }

    render() {

        return (
            <div>
                {this.postList()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        singlePost: state.posts
    }
}

export default connect(mapStateToProps, null)(PostList);
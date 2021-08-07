import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feed extends Component {
    render() {
        const { posts } = this.props;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div>
                        <span>{post.art}</span>
                        <p>{post.caption}</p>
                    </div>
                )
            })
        ) : (
            <div>You do not have any posts on your feed yet...</div>
        )

        return (
            <div className="userHome" >
                <h1>Welcome User!</h1>
                
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

export default connect(mapStateToProps)(Feed);
import React from 'react';

class PostList extends React.Component {
    postList = () => {
        return (
            this.props.myPost.map(post =>
                <div key={post.id}>
                    <h1>{post.caption}</h1>
                    <img src={post.art_format.url} ></img>
                </div>
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

export default PostList;
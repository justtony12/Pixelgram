import React from 'react';

class PostList extends React.Component {
    listPosts = () => {
        return this.props.pixelArt.map(post => <img key={post.id} src={post.url} alt={post.id} />)
    }

    render() {
        return(
            <div>
                {this.listPosts}
            </div>
        )
    }
}

export default PostList;
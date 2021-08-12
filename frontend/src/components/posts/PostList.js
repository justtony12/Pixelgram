import React from 'react';
import '../editing/styles/home.scss'

class PostList extends React.Component {
    postList = () => {
        return (
            this.props.myPost.map(post =>
                <div key={post.id} className='singlePringle'>
                    <h3>{post.caption}</h3>
                    <img src={post.art_format.url} />
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
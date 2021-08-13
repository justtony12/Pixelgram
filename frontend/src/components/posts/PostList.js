import React from 'react';
import '../editing/styles/home.scss';

class PostList extends React.Component {

    postList = () => {
        return (
            this.props.myPost.map(post => (
                <div key={post.id} className='home'>
                    <img src={'http://localhost:3000' + post.art_format.url} alt={post.art_format.name} />
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

export default PostList;
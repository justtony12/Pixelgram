import React from 'react';
import '../editing/styles/home.scss';

class PostList extends React.Component {

    postList = () => {
        return (
            this.props.myPost.map(post => (
                <div key={post.id} className='singlePringle'>
                    <h3 className='singleCaption'>{post.caption}</h3>
                    <img className='pix' src={'http://localhost:3000' + post.art_format.url} alt={post.art_format.name} />
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
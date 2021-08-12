import React from 'react';
import '../editing/styles/home.scss';
import './fallbackImage/oops.jpg'

class PostList extends React.Component {

    onImageError(e){
        console.log('ERROR!');
        // e.target.src ='./fallbackImage/oops.jpg'
    }

    postList = () => {
        return (
            this.props.myPost.map(post => (
                <div key={post.id} className='singlePringle'>
                    <h3>{post.caption}</h3>
                    <img src={'http://localhost:3000' + post.art_format.url} onError={this.onImageError} alt={post.art_format.name} />
                </div>
            )
            )
        )
    }

    render() {
        // debugger
        return (
            <div>
                {this.postList()}
            </div>
        )
    }
}

export default PostList;
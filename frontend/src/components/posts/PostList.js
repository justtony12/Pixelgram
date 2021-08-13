import React from 'react';
import '../editing/styles/home.scss';
import { Link } from 'react-router-dom';
import Duck from './Images/duck500.png';

class PostList extends React.Component {

    postList = () => {
        return (
            this.props.myPost.map(post => (
                <div key={post.id} className='home'>
                    <Link to={'/post/' + post.id} >
                        <img src={'http://localhost:3000' + post.art_format.url} alt={post.art_format.name} onError={this.handleError}/>
                    </Link>
                    <p className='singleCaption'>{post.caption}</p>
                </div>
            )
            )
        )
    }

    handleError = () => {
        return <div className='home' ><img src={Duck} alt='The ducking servers are down...' /></div>
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
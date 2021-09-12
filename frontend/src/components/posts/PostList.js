import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../editing/styles/home.scss';
import { Link } from 'react-router-dom';
import Liker from './Liker';

class PostList extends Component {

    state = {
        likes: 0
    }

    handleChange = (e) => {
        console.log(this.state.likes);
        this.setState({
            likes: parseInt(e.target.value)
        }) 
    }

    postList = () => {
        return (
            this.props.singlePost.map(post => (
                <div key={post.id} className='home'>
                    <Liker likes={this.state.likes} />
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
                <label>+ or -</label>
                    <input
                        className='panelInput'
                        type='number'
                        defaultValue={this.state.likes}
                        onChange={this.handleChange}
                    />
                <label>Likes</label>
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
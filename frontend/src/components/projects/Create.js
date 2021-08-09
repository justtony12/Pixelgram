import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../userContent/actions/postActions';

class Create extends Component {
    state = {
        art: null,
        caption: '',
        loading: false
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSelectedFile = (e) => {
        this.setState({
            art: e.target.files[0]
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // this.props.createPost(this.state)
        const formData = new FormData();
        formData.append('art', this.state.art);
        formData.append('caption', this.state.caption);

        fetch('http://localhost:3000/posts', {
            method: 'POST',
            body: formData
        })
        .catch(error=>console.log(error));
    }

    render() {
        return (
            <div>
                <h1>Post Your Artwork Below</h1>

                <form onSubmit={this.handleSubmit}>
                    <label>Upload Art:</label>
                    <input type='file' id='art' accept='image/*' multiple={false} onChange={this.handleSelectedFile} /><br/>

                    <label>Write a capation:</label>
                    <input type='text' id='caption' onChange={this.handleChange} /><br/>

                    <button>Post</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createPost: (post) => dispatch(createPost(post))
    }
}

export default connect(null, mapDispatchToProps)(Create);

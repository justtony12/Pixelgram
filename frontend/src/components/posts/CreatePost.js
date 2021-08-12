import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../store/actions/postActions';
import '../editing/styles/home.scss';

class Create extends Component {
    artFile = React.createRef()

    state = {
        art: '',
        caption: ''
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
        const formData = new FormData();
        formData.append('art', this.state.art);
        formData.append('caption', this.state.caption);
        this.props.createPost(formData);
        this.props.history.push('/home');
    }
    

    render() {

        return(
            <div className='posts'>
                <h1>Post Your Artwork Below</h1>

                <form onSubmit={this.handleSubmit}>
                    <label>Upload Art:</label>
                    <input type='file' id='art' onChange={this.handleSelectedFile} ref={this.artFile}/><br/>

                    <label>Write a capation:</label>
                    <textarea className='setBox' id='caption' onChange={this.handleChange} defaultValue={this.state.caption}/><br/>

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
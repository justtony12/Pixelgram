import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../store/actions/postActions';
import '../editing/styles/home.scss';

class Create extends Component {
    state = {
        art: null,
        caption: ''
    }

    artFile = React.createRef()

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
        const formData = new FormData(this.state)
        // formData.append('art', this.artFile)
        // formData.append('catption', this.state.caption)
        // debugger

        this.props.createPost(formData);
    }
    

    render() {

        return(
            <div className='posts'>
                <h1>Post Your Artwork Below</h1>

                <form onSubmit={this.handleSubmit}>
                    <label>Upload Art:</label>
                    <input type='file' id='art' accept='image/*' multiple={false} onChange={this.handleSelectedFile} ref={this.artFile}/><br/>

                    <label>Write a capation:</label>
                    <textarea className='setBox' id='caption' onChange={this.handleChange} value={this.state.caption}/><br/>

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
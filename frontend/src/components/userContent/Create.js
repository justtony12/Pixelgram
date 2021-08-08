import React, { Component } from 'react';

class Create extends Component {
    state = {
        art: '',
        caption: ''
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    handleSelectedFile = (e) => {
        this.setState({
            art: e.target.files[0]
        })
    }

    render() {
        return (
            <div>
                <h1>Post Your Artwork Below</h1>

                <form onSubmit={this.handleSubmit}>
                    <label>Upload Art:</label>
                    <input type='file' id='art' onChange={this.handleSelectedFile} /><br/>

                    <label>Write a capation:</label>
                    <input type='text' id='caption' onChange={this.handleChange} /><br/>

                    <button>Post</button>
                </form>
            </div>
        )
    }
}

export default Create;

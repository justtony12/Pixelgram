export const deletePost = (id) => {
    return {
        type: 'DELETE_POST',
        id
    }
}

export const createPost = (post) => {
    debugger
    return (dispatch) => {
        fetch('http://localhost:3000/posts',{
            method: 'POST',
            headers: {accept: 'application/json'},
            body: post
        })
        .then(() => {
            dispatch({ type: 'CREATE_POST', post});
        })
        .catch((error) => {
            dispatch({type: 'CREATE_POST_ERROR', error});
        })
    }
}

export const fetchPosts = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_POSTS'});
        fetch('http://localhost:3000')
        .then(resp => {return resp.json()})
        .then(posts => dispatch({type: 'ADD_POSTS', posts}))
    }
}

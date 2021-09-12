export const createPost = (post) => {
    return (dispatch) => {
        fetch('http://localhost:3000/posts',{
            method: 'POST',
            headers: {accept: 'application/json'},
            body: post
        })
        .then((resp) => {
            return resp.ok ? (
             resp.json().then(postJSON => dispatch({ type: 'CREATE_POST', postJSON}))
             ) :(
                resp.json().then(error => dispatch({type: 'CREATE_POST_ERROR', error}))
             )
        })
        .catch((error) => {
            dispatch({type: 'CREATE_POST_ERROR', error});
        })
    }
}

export const fetchPosts = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_POSTS'})
        fetch('http://localhost:3000/posts')
        .then(resp => {return resp.json()})
        .then(postsJSON => {dispatch({type: 'ADD_POSTS', posts: postsJSON})})
        .catch((error) => {
            dispatch({type: 'CREATE_POST_ERROR', error})
        })
    }
}

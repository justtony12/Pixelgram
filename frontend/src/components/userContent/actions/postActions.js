export const deletePost = (id) => {
    return {
        type: 'DELETE_POST',
        id
    }
}

export const createPost = (post) => {
    return (dispatch, getState) => {
        dispatch({ type: 'CREATE_POST', post})
    }
}

export function fetchPost() {
    return(dispatch) => {
        dispatch({type: 'ADD_POSTS_REQUEST'});
        fetch('http://localhost:3000/posts')
        .then(resp => resp.json())
        .then(posts => dispatch({type: 'ADD_POSTS', posts }));
    }
}
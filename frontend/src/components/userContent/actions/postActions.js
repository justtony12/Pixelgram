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
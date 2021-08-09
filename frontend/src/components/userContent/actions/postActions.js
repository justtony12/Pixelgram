// export const deletePost = (id) => {
//     return {
//         type: 'DELETE_POST',
//         id
//     }
// }

// export const createPost = (post) => {
//     return (dispatch, getState) => {
//         dispatch({ type: 'CREATE_POST', post})
//     }
// }

export const fetchPost = () => {
    return(dispatch) => {
        dispatch({type: 'LOADING_ART'});
        fetch('http://localhost:3000/posts')
        .then(resp => {return resp.json()})
        .then(post => {
            dispatch({type: 'ADD_POST', art: post.art, caption: post.caption})
        })
    }
}
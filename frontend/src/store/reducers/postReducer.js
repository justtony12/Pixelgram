const postReducer = (state = {posts: [], loading: false}, action) => {
    switch (action.type) {
        case 'LOADING_POSTS':
            return {
                ...state,
                loading: true
            }
        case 'ADD_POSTS':
            return {
                ...state,
                posts: action.posts,
                loading: false
            }
        // case 'DELETE_POST':
        //     let newPosts = state.posts.filter(post => {return action.id !== post.id})
        //     return {
        //         ...state,
        //         posts: newPosts
        //     }
        case 'CREATE_POST':
            return {
                ...state,
                posts: action.posts
            }
        case 'CREATE_POST_ERROR':
            console.log('post error', action.error);
            return state;
        default:
            return state;
    }
};

export default postReducer;
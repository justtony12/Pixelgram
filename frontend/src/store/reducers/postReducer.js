const postReducer = (
    state = { posts: [], loading: false, likes: 0 }, action) => {
    switch (action.type)
    {
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
        case 'CREATE_POST':
            return {
                ...state,
                posts: [...state.posts, action.postJSON]
            }
        case 'CREATE_POST_ERROR':
            console.log('post error', action.error);
            return state;
        default:
            return state;
    }
};

export default postReducer;
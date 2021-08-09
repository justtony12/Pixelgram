const initState = {
    posts: [
        {id: '1', art: 'art_1', caption: 'this is my caption for post 1.'},
        {id: '2', art: 'art_2', caption: 'this is my caption for post 2.'},
        {id: '3', art: 'art_3', caption: 'this is my caption for post 3.'}
    ]
}

const postReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_POST':
            let newPosts = state.posts.filter(post => {
                return action.id !== post.id
        })
        return {
            ...state,
            posts: newPosts
        }
        case 'CREATE_POST':
            console.log('post created', action.post);
    }
    return state;
};

export default postReducer;
const initState = {
    posts: [
        {id: '1', image: 'img_1', caption: 'this is my caption for my first post!'},
        {id: '2', image: 'img_2', caption: 'this is my caption for my second post!'},
        {id: '3', image: 'img_3', caption: 'this is my caption for my third post!'}
    ]
}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer;
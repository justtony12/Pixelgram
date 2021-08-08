const initState = {
    posts: [
        {id: 1, art: 'art_1', caption: 'this is the caption for my first post.'},
        {id: 2, art: 'art_2', caption: 'this is the caption for my second post.'},
        {id: 3, art: 'art_3', caption: 'this is the caption for my third post.'}
    ]
}

const postReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_POST':
            console.log('created post', action.post)
    }
    return state
}

export default postReducer;
const postReducer = (state = {art: [], caption: [], loading: false }, action) => {
    
    switch (action.type) {
        case 'LOADING_ART':
            return {
                ...state,
                art: [...state.art],
                caption: [...state.caption],
                loading: true
            }
        case 'ADD_POST':
            return {
                ...state,
                art: action.art,
                caption: action.caption,
                loading: false
            }
        default:
            return state;
    }
}

export default postReducer;
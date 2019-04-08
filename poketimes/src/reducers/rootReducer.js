
const initState = {
    posts: [
        {id: '1', title: 'Squirtle Laid an Egg', body: 'Lorizzle ipsum dolizzle sit yippiyo, consectetizzle'},
        {id: '2', title: 'Break yo neck', body: 'Break yo neck, yall funky fresh. Aliquam da bomb massa'},
        {id: '3', title: 'Pellentesque', body: 'Pellentesque habitant morbi tristique mah nizzle et fo '}
    ]
}

const rootReducer = (state = initState, action) => {
    console.log(state);
    console.log(action);

    if(action.type === 'DELETE_POST'){
        return {
            ...state,
            posts: state.posts.filter(post => action.id !== post.id)
        }
    }

    // must return here because it's called once without any action. It was giving an error
    return state;
}

export default rootReducer;
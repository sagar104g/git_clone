const repos = (state = [], action) => {
    switch(action.type){
        case 'UPDATE_REPOS':
            return [
                action.repos
            ]
        default:
            return state;
    }
}
export default repos;
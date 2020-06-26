const profile = (state = {}, action) => {
    switch(action.type){
        case 'UPDATE_PROFILE':
            return {
                name: action.name,
                login: action.login,
                company: action.company,
                bio: action.bio,
                location: action.location
            }
        default:
            return state;
    }
}
export default profile;
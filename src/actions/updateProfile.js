export const updateProfileAction = (profileData) => ({
    type: 'UPDATE_PROFILE',
    name: profileData.name ? profileData.name : null,
    login: profileData.login ? profileData.login : null,
    company: profileData.company ? profileData.company : null,
    bio: profileData.bio ? profileData.bio : null,
    location: profileData.location ? profileData.location : null
})
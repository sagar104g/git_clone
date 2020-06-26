export const updateReposAction = (reposData) => ({
    type: 'UPDATE_REPOS',
    repos: reposData ? reposData : []
})
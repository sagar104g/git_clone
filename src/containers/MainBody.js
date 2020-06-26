import { connect } from 'react-redux'
import React, {useEffect} from 'react';
import RepoList from './reposList';
import {updateProfileAction} from '../actions/updateProfile'
import {updateReposAction} from '../actions/updateRepos'

var fetchRepos = (setter) => {
  fetch("https://api.github.com/users/supreetsingh247/repos")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          setter(result);
        },
        (error) => {
          console.log(error)
        }
      )
}

var fetchUser = (setter) => {
  fetch("https://api.github.com/users/supreetsingh247")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          setter(result);
        },
        (error) => {
          console.log(error)
        }
      )
}

var cleanRepos = () => {
  //to clean repos state
}

var cleanUser = () => {
  //to clean user state
}

var MainBody = (props) => {

  useEffect(() => {
    fetchRepos(props.updateRepos);
    fetchUser(props.updateProfile);

    return( () => {
      cleanRepos();
      cleanUser();
    })
  }, []);
  return (
    <React.Fragment>
      <h1>hello</h1>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  repos: state.repos,
  profile: state.profile
})

const mapDispatchToProps = (dispatch) => ({
  updateProfile: (profileData) => dispatch(updateProfileAction(profileData)),
  updateRepos: (reposData) => dispatch(updateReposAction(reposData))
})

export default connect(mapStateToProps, mapDispatchToProps)(MainBody);

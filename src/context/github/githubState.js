import React, { useReducer } from 'react';
import Axios from 'axios';
import GithubReducer from './githubReducer';
import GithubContext from './githubContext';
import { SEARCH_USERS, SET_LOADING, CLEAR_USERS, SET_USERS, SET_USER, SET_ALERT, CLEAR_ALERT, GET_REPOS, SET_REPOS } from '../types';


const GithubState = props => {
    const { REACT_APP_GITHUB_CLIENT_ID, REACT_APP_GITHUB_CLIENT_SECRET, REACT_APP_BASE_SEARCH_USER } = process.env;
    const BASE_URL = `https://api.github.com/users?client_id=${REACT_APP_GITHUB_CLIENT_ID}&client_secret=${REACT_APP_GITHUB_CLIENT_SECRET}`;
    let githubClientId, githubClientSecret;
    if (process.env.NODE_ENV !== 'production') {
        githubClientId = REACT_APP_GITHUB_CLIENT_ID;
        githubClientSecret = REACT_APP_GITHUB_CLIENT_SECRET;
    } else {
        githubClientId = process.env.GITHUB_CLIENT_ID;
        githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
    }

    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }
    const [state, dispatch] = useReducer(GithubReducer, initialState);

    // Init Users
    const getUsers = async () => {
        setLoading();
        const { data } = await Axios.get(BASE_URL)
            .then(value => new Promise(resolve => {
                setTimeout(() => {
                    resolve(value);
                }, 800);
            }));
        const newState = data.slice(0, 9);
        setUsers(newState);
    }

    // Get User
    const getUser = async (username) => {
        setLoading();
        console.log(`whtf ${REACT_APP_BASE_SEARCH_USER}`)
        const { data } = await Axios.get(`${REACT_APP_BASE_SEARCH_USER}/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`)
            .then(value => new Promise(resolve => {
                setTimeout(() => {
                    resolve(value);
                }, 800);
            })
            );
        console.log('wait a minute', data);
        const newState = Object.assign({}, data);
        dispatch({ type: SET_USER, payload: data });
    }
    // Search User
    // Arrow functions use async after equal sign
    const searchUsers = async (name) => {
        setLoading();
        const { data, data: { items } } = await Axios.get(`https://api.github.com/search/users?q=${name}&client_id=${githubClientId}&client_secret=${githubClientSecret}`)
            .then(value => new Promise(resolve => {
                setTimeout(() => {
                    resolve(value);
                }, 800);
            })
            );
        const newState = items.slice(0, 8);
        console.log('search', newState);
        dispatch({ type: SEARCH_USERS, payload: newState })
    }

    // Set Loading
    const setLoading = () => dispatch({ type: SET_LOADING });

    // Set Users
    const setUsers = (newState) => dispatch({ type: SET_USERS, payload: newState });

    // Clear Users
    const clearUsers = () => dispatch({ type: CLEAR_USERS });

    // Set Repos
    // Normal function for lifecycle methos use async keyword
    const getUserRepos = async (username) => {
        setLoading();
        const { data } = await Axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`)
            .then(value => new Promise(resolve => {
                setTimeout(() => {
                    resolve(value);
                }, 800);
            })
            );
        const newRepos = [...data];

        dispatch({ type: SET_REPOS, payload: newRepos });

    }

    return (
        <GithubContext.Provider
            value={{
                users: state.users,
                user: state.user,
                repos: state.repos,
                loading: state.loading,
                alert: state.alert,
                searchUsers,
                clearUsers,
                getUsers,
                getUser,
                setUsers,
                getUserRepos
            }}
        >
            {props.children}
        </GithubContext.Provider>
    )
}
export default GithubState;
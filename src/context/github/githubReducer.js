import React from 'react';
import { SEARCH_USERS, SET_LOADING, CLEAR_USERS, SET_USER, SET_ALERT, CLEAR_ALERT, SET_REPOS, SET_USERS } from '../types';

export default (state, action) => {
    switch (action.type) {
        case SEARCH_USERS:
        case SET_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case SET_REPOS:
            return {
                ...state,
                repos: action.payload,
                loading: false
            }
        case SET_USER:
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case CLEAR_USERS:
            return {
                ...state,
                users: [],
                loading: false
            }
        case SET_ALERT:
            console.log('payload', action)
            return {
                ...state,
                alert: {
                    ...action.payload
                }
            }
        case CLEAR_ALERT:
            return {
                ...state,
                alert: null
            }
        default:
            return state;
    }
};
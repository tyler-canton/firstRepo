import React from 'react';
import { SET_ALERT, CLEAR_ALERT } from '../types';

export default (state, action) => {
    switch (action.type) {

        case SET_ALERT:
            console.log('alert payload', action)
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
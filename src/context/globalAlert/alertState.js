import React, { useReducer } from 'react';
import AlertContext from './alertContext';

import { SET_ALERT, CLEAR_ALERT } from '../types';
import AlertReducer from './alertReducer';


const AlertState = props => {
    const initialState = {
        alert: null
    }
    const [state, dispatch] = useReducer(AlertReducer, initialState);

    // Show Alert
    const showAlert = (msg, type) => {
        dispatch({ type: SET_ALERT, payload: { msg, type } });
        setTimeout(() => {
            dispatch({ type: CLEAR_ALERT })
        }, 2500);
    }


    return (
        <AlertContext.Provider
            value={{
                alert: state.alert,
                showAlert
            }}
        >
            {props.children}
        </AlertContext.Provider>
    )
}
export default AlertState;
import React, { useReducer } from 'react'
import AlertiContext from './alertiContext';
import AlertiReducer from './alertiReducer';
import { SET_ALERTI, REMOVE_ALERTI } from '../types';

const AlertiState = props => {
    const initialState = null;

    const [state, dispatch] = useReducer(AlertiReducer, initialState);

    //Set alert
      // Set Alert
    const setAlerti = (msg, type) => {
        dispatch({
            type: SET_ALERTI,
            payload: { msg, type }
        })
        setTimeout(() => dispatch({ type: REMOVE_ALERTI}), 5000)
    }

    return (
        <AlertiContext.Provider
            value = {{
                alerti: state,
                setAlerti
            }}
            >
                {props.children}
        </AlertiContext.Provider>
        );
    };

export default AlertiState;

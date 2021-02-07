import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
import setAuthToken from  '../../utils/setAuthToken'
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS
} from '../types';

const AuthState = props => {
  const initialState = {
      token: localStorage.getItem('token'),
      isAuthenticated: null,
      loading: true,
      user: null,
      error: null
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load User
  const loadUser = async () => {
    if(localStorage.token) {
      setAuthToken(localStorage.token);
    }
    // storage에 있는 token을 꺼내서 headers에 세팅
    // @todo - load token into global headers
    // token을 체크해서 권한이 있는 유저인지 확인해 주는 프로세스
    try {
      const res = await axios.get('/auth');

      dispatch({
         type : USER_LOADED,
         payload : res.data
      });
    } catch (err) {
      dispatch({ type: AUTH_ERROR})
    }
  };

  // Register User
  const register = async formData => {
    const config = {
      headers: {
        'Content-Type' : 'application/json'
      }
    }

    try {
      const res = await axios.post('/sign-up', formData, config);
    
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
      loadUser();
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msg
      });
    }

   }


  

  // Login User
  const login = async formData => {
    const config = {
      headers: {
        'Content-Type' : 'application/json'
      }
    }

    try {
      const res = await axios.post('/login', formData, config);
    
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
      loadUser();
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.msg
      });
    }

   }
    
  

  // Logout
  const logout = () => dispatch({ type: LOGOUT })
  
  // Clear Errors
  const clearErrors = () => dispatch({ type: CLEAR_ERRORS })
  
  return (
    <AuthContext.Provider
      value={{
          token: state.token,
          isAuthenticated: state.isAuthenticated,
          loading: state.loading,
          user: state.user,
          error: state.error,
          register,
          loadUser,
          login,
          logout,
          clearErrors
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
import React, { useReducer } from 'react'
import axios from 'axios';
import BeetContext from './beetContext';
import BeetReducer from './beetReducer';
import {
    SEARCH_IMAGES,
    SET_LOADING,
    CLEAR_IMAGES,
    GET_IMAGE,
    GET_REPOS
} from '../types';

let githubClientId;
let githubClientSecret;

if(process.env.NODE_EV !== 'production') {
    githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID
    githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET
} else {
    githubClientId = process.env.GITHUB_CLIENT_ID
    githubClientSecret = process.env.GITHUB_CLIENT_SECRET
}


const BeetState = props => {
    const initialState = {
        images: [],
        image: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(BeetReducer, initialState);

    // Search Users
    const searchImages = async text => {
        setLoading();

        const res = await axios.get(
        `https://api.github.com/search/users?q=${text}&client_id=
        ${githubClientId}&client_secret=${githubClientSecret}`);

        dispatch({
            type: SEARCH_IMAGES,
            payload:res.data.items
        })
    }

    // Get User
    const getImage = async(imagename) => {
        setLoading();
    
        const res = await axios.get(
          `https://api.github.com/users/${imagename}?client_id=
          ${githubClientId}&client_secret=${githubClientSecret}`);
        
        dispatch({
            type: GET_IMAGE,
            payload: res.data
        })
        }

    // Get Repos
    const getImageRepos = async(imagename) => {
        setLoading();
    
        const res = await axios.get(
          `https://api.github.com/users/${imagename}/repos?per_page=5&sort=created:asc&client_id=
          ${githubClientId}&client_secret=${githubClientSecret}`);

          dispatch({
              type: GET_REPOS,
              payload: res.data
          })
        }

    // Clear Users
    const clearImages = () => dispatch({ type: CLEAR_IMAGES})

    // Set Loading
    const setLoading = () => dispatch( { type: SET_LOADING})

    return (
        <BeetContext.Provider
            value = {{
                images: state.images,
                image: state.image,
                repos: state.repos,
                loading: state.loading,
                searchImages,
                clearImages,
                getImage,
                getImageRepos
            }}
            >
                {props.children}
        </BeetContext.Provider>
        );
    };

export default BeetState;

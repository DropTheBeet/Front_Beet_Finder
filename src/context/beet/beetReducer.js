import {
    SEARCH_IMAGES,
    SET_LOADING,
    CLEAR_IMAGES,
    GET_IMAGE,
    GET_REPOS
} from '../types';

export default (state, action) => {
    switch(action.type) {
        case SEARCH_IMAGES:
            return {
                ...state,
                images: action.payload,
                loading: false
            };
        case GET_IMAGE:
            return {
                ...state,
                image : action.payload,
                loading: false
            }
        case CLEAR_IMAGES:
            return {
                ...state,
                images: [],
                loading: false
            }
        case GET_REPOS: {
            return {
                ...state,
                repos: action.payload,
                loading: false
            }
        }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}
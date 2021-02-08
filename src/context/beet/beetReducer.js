import {
    SEARCH_IMAGES,
    SET_LOADING,
    CLEAR_IMAGES,
    GET_IMAGE,
    GET_REPOS,
    SET_SEARCH_TAGS
} from '../types';

export default (state, action) => {
    switch(action.type) {
        case SEARCH_IMAGES:
            return {
                ...state,
                images: action.payload.img_info,
                tag_list: action.payload.tag_list,
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
        case SET_SEARCH_TAGS:
            return {
                ...state,
                search_tags: action.payload
            }
        default:
            return state;
    }
}
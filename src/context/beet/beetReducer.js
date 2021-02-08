import {
    SEARCH_IMAGES,
    SET_LOADING,
    CLEAR_IMAGES,
    GET_IMAGE,
    SELECT_IMAGES,
    SET_SEARCH_TAGS,
    FALSE_LOADING
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
        case SELECT_IMAGES: {
            return {
                ...state,
                selected_files: action.payload,
                loading: false
            }
        }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        case FALSE_LOADING:
            return {
                ...state,
                loading: false
            }
        case SET_SEARCH_TAGS:
            return {
                ...state,
                search_tags: action.payload
            }
        default:
            return state;
    }
}
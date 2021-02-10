import {
    SEARCH_IMAGES,
    SET_LOADING,
    CLEAR_IMAGES,
    GET_IMAGE,
    SELECT_IMAGES,
    SET_SEARCH_TAGS,
    FALSE_LOADING,
    CLEAR_IMAGE,
    SET_CLICK_TYPE_R,
    SET_CLICK_TYPE_S,
    CLEAR_CLICK_TYPE,
    CLEAR_TAG_LIST
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
        case SELECT_IMAGES: 
            return {
                ...state,
                selected_files: action.payload,
                loading: false
            }
        case GET_IMAGE: 
            return {
                ...state,
                image : action.payload,
                loading: false
            }
        case CLEAR_IMAGE: 
            return {
                ...state,
                image : {},
                loading: false
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
            };
        case SET_SEARCH_TAGS:
            return {
                ...state,
                search_tags: action.payload
            };
        case CLEAR_TAG_LIST:
            return {
                ...state,
                tag_list : []
            }
        case CLEAR_CLICK_TYPE:
            return {
                ...state,
                click_type: {}
            };
        case SET_CLICK_TYPE_R:
            return {
                ...state,
                click_type: {type : "R"}
            };
        case SET_CLICK_TYPE_S:
            return {
                ...state,
                click_type: {type : "S"}
            };
        default:
            return state;
    }
}
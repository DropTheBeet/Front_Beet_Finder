import {SET_ALERTI, REMOVE_ALERTI} from '../types';

export default(state, action) => {
    switch(action.type) {
        case SET_ALERTI:
            return action.payload;
        case REMOVE_ALERTI:
            return null;
        default:
            return state;
    }
};
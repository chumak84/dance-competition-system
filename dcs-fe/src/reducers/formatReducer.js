import * as types from '../actions/actionTypes';
import * as initials from './initialState';

export default function formatReducer(state = initials.formats, action) {
    switch(action.type) {
        case types.LOAD_FORMATS_SUCCESS:
            return action.formats;
        case types.CREATE_FORMAT_SUCCESS:
            return [
                ...state,
                Object.assign({}, action.format)
            ];
        case types.UPDATE_FORMAT_SUCCESS: {
            let newState = [...state];
            let index = newState.findIndex(f => f.id === action.format.id);
            if(index >= 0)
                newState.splice(index, 1, action.format);
            return newState;
        }
        default:
            return state;
    }
}
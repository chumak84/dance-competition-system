import * as types from '../actions/actionTypes';

export default function formatReducer(state = [], action) {
    switch(action.type) {
        case types.LOAD_FORMATS_SUCCESS:
            return action.formats;
        default:
            return state;
    }
}
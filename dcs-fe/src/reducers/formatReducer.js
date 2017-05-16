import * as types from '../actions/actionTypes';

export default function formatReducer(state = [], action) {
    switch(action.type) {
        case 'CREATE_FORMAT':
            return [...state, Object.assign({}, action.format)];
        default:
            return state;
    }
}
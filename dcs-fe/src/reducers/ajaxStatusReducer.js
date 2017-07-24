import * as actionTypes from '../actions/actionTypes';
import * as initials from './initialState';

export default function (state = initials.ajaxStatus, action) {
    switch (action.type) {
        case actionTypes.BEGIN_AJAX_CALL: {
            let newState = Object.assign({}, state);
            newState.numberOfRunTasks++;
            newState.active = newState.numberOfRunTasks > 0;
            return newState;
        }
        case actionTypes.END_AJAX_CALL: {
            let newState = Object.assign({}, state);
            newState.numberOfRunTasks--;
            newState.active = newState.numberOfRunTasks > 0;
            return newState;
        }
        default:
            return state;
    }

}
import { combineReducers } from 'redux';
import formats from './formatReducer';
import ajaxStatus from './ajaxStatusReducer';

const rootReducer = combineReducers({
    formats,
    ajaxStatus
});

export default rootReducer;
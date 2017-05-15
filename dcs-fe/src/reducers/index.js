import { combineReducers } from 'redux';
import formats from './formatReducer';

const rootReducer = combineReducers({
    formats
});

export default rootReducer;
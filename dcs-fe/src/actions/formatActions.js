import * as types from './actionTypes';
import formatApi from '../api/mockFormatApi';

export function loadFormatsSuccess(formats) {
    return { type: types.LOAD_FORMATS_SUCCESS, formats };
}

export function loadFormats() {
    return function(dispatch) {
        return formatApi.getAllFormats().then(formats => {
            dispatch(loadFormatsSuccess(formats));
        }).catch(error => {
            throw(error);
        });
    };
}
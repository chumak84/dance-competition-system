import * as types from './actionTypes';
import formatApi from '../api/formatApi';
import { beginAjaxCall, endAjaxCall } from './ajaxStatusActions';

export function loadFormatsSuccess(formats) {
    return { type: types.LOAD_FORMATS_SUCCESS, formats };
}

export function updateFormatSuccess(format) {
    return { type: types.UPDATE_FORMAT_SUCCESS, format };
}

export function createFormatSuccedd(format) {
    return { type: types.CREATE_FORMAT_SUCCESS, format };
}

export function loadFormats() {
    return dispatch => {
        dispatch(beginAjaxCall());
        return formatApi.getAllFormats().then(formats => {
            dispatch(loadFormatsSuccess(formats));
        }).catch(error => {
            throw(error);
        });
    };
}

export function saveFormat(format) {
    return function(dispatch) {
        dispatch(beginAjaxCall());
        return formatApi.saveFormat(format).then(savedFormat => {
            format.id > 0 ? dispatch(updateFormatSuccess(savedFormat))
                : dispatch(createFormatSuccedd(savedFormat));
        }).catch(error => {
            throw(error);
        });
    };
}
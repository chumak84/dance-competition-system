import * as types from './actionTypes';

export function createFormat(format) {
    return { type: types.CREATE_FORMAT, format };
}
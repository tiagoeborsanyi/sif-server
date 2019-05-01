import * as actionTypes from './actionTypes';

export const fetchSearchSuccess = (buscas) => {
    return {
        type: actionTypes.SEARCH_SUCCESS,
        search: buscas
    }
}

export const fetchSearch = (value) => {
    return dispatch => {
        dispatch(fetchSearchSuccess(value));
    }
}
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    error: null
};

const searchFail = (state, action) => {
    return updateObject(state, {
        error: action.errorBusca
    });
}

const authFail = (state, action) => {
    return updateObject(state, {
        error: action.errorAuth
    });
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.SEARCH_FAIL: return searchFail(state, action);
        default: return state;
    }
}

export default reducer;
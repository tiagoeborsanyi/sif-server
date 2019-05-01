import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    search: []
}

const fetchSearchSuccess = (state, action) => {
    return updateObject(state, {
        search: action.search
    });
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SEARCH_SUCCESS: return fetchSearchSuccess(state, action);
        default: return state;
    }
}

export default reducer;
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    search: [],
    valor: ''
}

const fetchSearchStart = (state, action) => {
    return updateObject(state, {
        search: action.search
    })
}

const fetchSearchSuccess = (state, action) => {
    return updateObject(state, {
        valor: action.valorInserido
    });
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SEARCH_SUCCESS: return fetchSearchSuccess(state, action);
        case actionTypes.SEARCH_START: return fetchSearchStart(state, action);
        default: return state;
    }
}

export default reducer;
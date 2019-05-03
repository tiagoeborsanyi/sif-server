import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    isAuthenticate: false,
    token: null,
    nome: null,
    userId: null
}

const authSuccess = (state, action) => {
    return updateObject(state, {
        nome: action.nome
    });
}

const loginSuccess = (state, action) => {
    return updateObject(state, {
        isAuthenticate: true,
        token: action.token,
        nome: action.nome,
        userId: action.userId,
        avatar: action.avatar
    })
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.LOGIN_SUCCESS: return loginSuccess(state, action);
        default: return state;
    }
}

export default reducer;
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    // Depois que criar as paginas de perfil, alterar senha e alterar cadastro de user, tenho que mudar isso
    isAuthenticate: false,
    token: null,
    nome: null,
    email: null,
    userId: null,
    loginRedirectPath: '/dashboard'
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
        email: action.email,
        userId: action.userId,
        avatar: action.avatar
    })
}

const checkoutSuccess = (state, action) => {
    return updateObject(state, {
        token: action.token,
        userId: action.userId
    })
}

const logout = (state, action) => {
    return updateObject(state, {
        token: null,
        userId: null
    })
}

const setLoginRedirectPath = (state, action) => {
    return updateObject(state, {
        loginRedirectPath: action.path
    })
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.LOGIN_SUCCESS: return loginSuccess(state, action);
        case actionTypes.SET_LOGIN_REDIRECT_PATH: return setLoginRedirectPath(state, action);
        case actionTypes.CHECK_SUCCESS: return checkoutSuccess(state, action);
        case actionTypes.AUTH_LOGOUT: return logout(state, action);
        default: return state;
    }
}

export default reducer;
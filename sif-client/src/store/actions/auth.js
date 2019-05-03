import axios from '../../axios-order';

import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (nome) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        nome: nome
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const loginStart = () => {
    return {
        type: actionTypes.LOGIN_START
    };
};

export const loginSuccess = (response) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        token: response.token,
        nome: response.user.name,
        userId: response.user.id,
        avatar: response.user.avatar
    };
};

export const loginFail = (error) => {
    return {
        type: actionTypes.LOGIN_FAIL,
        error: error
    };
};

export const auth = (nome, email, pass1, pass2) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            name: nome,
            email: email,
            password: pass1,
            password2: pass2
        }
        axios.post('api/users/register', authData)
            .then(res => {
                console.log(res.data);
                dispatch(authSuccess(res.data.name));
            })
            .catch(err => {
                console.log(err.response)
            });
    }
}

export const login = (email, pass) => {
    return dispatch => {
        dispatch(loginStart());
        const authLogin = {
            email: email,
            password: pass
        }
        axios.post('api/users/login', authLogin)
            .then(res => {
                console.log(res.data);
                dispatch(loginSuccess(res.data))
            })
            .catch(err => {
                console.log(err.response);
                dispatch(loginFail(err.response));
            });
    }
};

export const setLoginRedirect = (path) => {
    return {
        type: actionTypes.SET_LOGIN_REDIRECT_PATH,
        path: path
    }
}
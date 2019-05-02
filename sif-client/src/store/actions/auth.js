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
        console.log(authData);
    }
}
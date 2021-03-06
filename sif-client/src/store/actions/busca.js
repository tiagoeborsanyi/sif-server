import * as actionTypes from './actionTypes';
import axios from '../../axios-order';


export const fetchSearchStart = (result) => {
    return {
        type: actionTypes.SEARCH_START,
        search: result
    }
}

export const fetchSearchSuccess = (buscas) => {
    return {
        type: actionTypes.SEARCH_SUCCESS,
        valorInserido: buscas
    }
}

export const buscaFail = (error) => {
    return {
        type: actionTypes.SEARCH_FAIL,
        errorBusca: error
    };
};

export const fetchSearch = (token) => {
    return dispatch => {
        const fetchBusca = [];
        axios.get('api/vt', { headers: {"Authorization" : token} }).then(res => {
            fetchBusca.push(...res.data);
            dispatch(fetchSearchStart(fetchBusca));
        })
        .catch(err => {
            dispatch(buscaFail(err.response));
        });
    }
}

export const fetchSearchResult = (value) => {
    return dispatch => {
        dispatch(fetchSearchSuccess(value));
    }
}
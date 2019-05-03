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

export const fetchSearch = (token) => {
    return dispatch => {
        const fetchBusca = [];
        axios.get('api/vt', { headers: {"Authorization" : token} }).then(res => {
            fetchBusca.push(...res.data);
            dispatch(fetchSearchStart(fetchBusca));
        })
        .catch(err => console.log(err));
    }
}

export const fetchSearchResult = (value) => {
    return dispatch => {
        dispatch(fetchSearchSuccess(value));
    }
}
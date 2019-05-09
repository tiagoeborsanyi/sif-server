const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatehd (data) {
    let errors = {};

    data.data = !isEmpty(data.data) ? data.data : '';
    data.baia = !isEmpty(data.baia) ? data.baia : '';
    data.observacao = !isEmpty(data.observacao) ? data.observacao : '';

    if (Validator.isEmpty(data.data)) {
        errors.data = 'Campo data é obrigatório.';
    }

    if (Validator.isEmpty(data.baia)) {
        errors.baia = 'É obrigatório seleciona a baia do HD.';
    }

    if (Validator.isEmpty(data.observacao)) {
        errors.observacao = 'Campo observação é obrigatório.';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}
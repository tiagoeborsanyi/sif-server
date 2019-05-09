const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatefita (data) {
    let errors = {};

    data.data = isEmpty(data.data) ? data.data : '';
    data.observacao = isEmpty(data.observacao) ? data.observacao : '';

    if (Validator.isEmpty(data.data)) {
        errors.data = 'Campo data é obrigatório.';
    }

    if (Validator.isEmpty(data.observacao)) {
        errors.observacao = 'Campo observação é obrigatório.';
    }

    return {
        errors,
        isValid: isEmpty(data)
    }
}
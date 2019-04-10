const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatevt(data) {
    let errors = {};

    data.nomevt = !isEmpty(data.nomevt) ? data.nomevt : '';
    data.apelido = !isEmpty(data.apelido) ? data.apelido : '';

    if (Validator.isEmpty(data.nomevt)) {
        errors.nomevt = 'Nome da VT é obrigatório.';
    }

    if (Validator.isEmpty(data.apelido)) {
        errors.apelido = 'Apelido da VT é obrigatório.';
    }

    if (Validator.isEmpty(data.vtmigrada)) {
        errors.vtmigrada = 'É necessário dizer se a VT foi migrada ou não.';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
};
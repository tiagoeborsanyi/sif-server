const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatevt(data) {
    let errors = {};

    data.nomevt.nomevt = !isEmpty(data.nomevt.nomevt) ? data.nomevt.nomevt : '';
    data.apelido.apelido = !isEmpty(data.apelido.apelido) ? data.apelido.apelido : '';

    if (Validator.isEmpty(data.nomevt.nomevt)) {
        errors.nomevt = 'Nome da VT é obrigatório.';
    }

    if (Validator.isEmpty(data.apelido.apelido)) {
        errors.apelido = 'Apelido da VT é obrigatório.';
    }

    if (Validator.isEmpty(data.vtmigrada.vtmigrada)) {
        errors.vtmigrada = 'É necessário dizer se a VT foi migrada ou não.';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
};
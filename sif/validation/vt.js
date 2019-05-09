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

    if (Validator.isEmpty(data.hds[0].baia1 && 
                            data.hds[1].baia2 &&
                            data.hds[2].baia3 &&
                            data.hds[3].baia4 &&
                            data.hds[4].baia5 &&
                            data.hds[5].baia6 &&
                            data.hds[6].baia7 &&
                            data.hds[7].baia8)) {
        errors.hd = 'HD é necessario.';
    }
    

    return {
        errors,
        isValid: isEmpty(errors)
    }
};
const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateEditPass(data) {
  let errors = {};

  data.password = !isEmpty(data.password) ? data.password : '';
  data.password2 = !isEmpty(data.password2) ? data.password2 : '';


  if (Validator.isEmpty(data.password)) {
    errors.password = 'Senha é obrigatório';
  }

  if (!Validator.isLength(data.password, { min: 3, max: 30 })) {
    errors.password = 'Senha deve conter no minimo 3 caracteres e no maximo 30';
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = 'Campo de confirmação de senha é obrigatório';
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = 'Senhas tem que serem iguaia nos dois campos';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
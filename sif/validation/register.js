const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.password2 = !isEmpty(data.password2) ? data.password2 : '';

  if (!Validator.isLength(data.name, { min: 5, max: 30 })) {
    errors.name = 'Campo nome deve conter no minimo 5 caracteres e no maximo 30';
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Nome é obrigatório';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email é obrigatório';
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email esta invalido';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Senha é obrigatório';
  }

  if (!Validator.isLength(data.password, { min: 3, max: 30 })) {
    errors.password = 'Senha deve conter no minimo 3 caracteres e no maximo 30';
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = 'CCampo de confirmação de senha é obrigatório';
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = 'Senhas tem que serem iguaia nos dois campos';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
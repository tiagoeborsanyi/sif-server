import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './Auth.css';
import * as actions from '../../store/actions/index';

class Auth extends Component {

    state = {
        cadastro: {
            nome: '',
            email: '',
            pass1: '',
            pass2: ''
        }
    }

    setChangeValue = (event) => {
        const updateCadastro = {
            ...this.state.cadastro
        }
        updateCadastro[event.target.name] = event.target.value;
        this.setState({cadastro: updateCadastro});
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onAuth('teste', '123');
    }

    render () {
        return (
            <div>
                <div className={classes.login}>
                    <div className={classes.titulo}><h1>Cadastra Usuario</h1></div>
                    <form>
                        <div>
                            <label>Nome</label>
                            <input onChange={this.setChangeValue} value={this.state.cadastro.nome} name="nome" type="text" placeholder="Nome" />
                        </div>
                        <div>
                            <label>E-mail</label>
                            <input onChange={this.setChangeValue} value={this.state.cadastro.email} name="email" type="text" placeholder="e-mail" />
                        </div>
                        <div>
                            <label>Senha</label>
                            <input onChange={this.setChangeValue} value={this.state.cadastro.pass1} name="pass1" type="password" placeholder="senha" />
                        </div>
                        <div>
                            <label>Repita a Senha</label>
                            <input onChange={this.setChangeValue} value={this.state.cadastro.pass2} name="pass2" type="password" placeholder="senha" />
                        </div>
                        <button onClick={this.submitHandler}>Cadastrar</button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password) => dispatch(actions.auth(email, password))
    }
}

export default connect(null, mapDispatchToProps)(Auth);

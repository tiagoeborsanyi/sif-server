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
        this.props.onAuth(this.state.cadastro.nome, this.state.cadastro.email, this.state.cadastro.pass1, this.state.cadastro.pass2);
        
    }

    render () {
        if(this.props.dados !== null) {
            this.props.history.push('/dashboard');
        }
        return (
            <div>
                <div className={classes.login}>
                    <div className={classes.titulo}><h1>Cadastra Usuario</h1></div>
                    <form>
                        <div>
                            <label>Nome</label>
                            <input onChange={this.setChangeValue} value={this.state.cadastro.nome} name="nome" type="text" placeholder="Nome" />
                            <span>{this.props.erros !== null ? this.props.erros.data.name : null}</span>
                        </div>
                        <div>
                            <label>E-mail</label>
                            <input onChange={this.setChangeValue} value={this.state.cadastro.email} name="email" type="text" placeholder="e-mail" />
                            <span>{this.props.erros !== null ? this.props.erros.data.email : null}</span>
                        </div>
                        <div>
                            <label>Senha</label>
                            <input onChange={this.setChangeValue} value={this.state.cadastro.pass1} name="pass1" type="password" placeholder="senha" />
                            <span>{this.props.erros ? this.props.erros.data.password : null}</span>
                        </div>
                        <div>
                            <label>Repita a Senha</label>
                            <input onChange={this.setChangeValue} value={this.state.cadastro.pass2} name="pass2" type="password" placeholder="senha" />
                            <span>{this.props.erros ? this.props.erros.data.password2 : null}</span>
                        </div>
                        <button onClick={this.submitHandler}>Cadastrar</button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        erros: state.error.error,
        dados: state.auth.dados
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (nome, email, pass1, pass2) => dispatch(actions.auth(nome, email, pass1, pass2))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);

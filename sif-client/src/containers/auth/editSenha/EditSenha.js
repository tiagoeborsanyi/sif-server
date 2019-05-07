import React, { Component } from 'react';
import axios from '../../../axios-order';
import { connect } from 'react-redux';

import classes from './EditSenha.css';

class EditSenha extends Component {

    state = {
        cadastro: {
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
    }

    render () {
        return (
            <div>
                <div className={classes.login}>
                    <div className={classes.titulo}><h1>Mudar sua senha</h1></div>
                    <form>
                        <div>
                            <label>Nova senha</label>
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

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        userId: state.auth.userId
    }
}

export default connect(mapStateToProps)(EditSenha);
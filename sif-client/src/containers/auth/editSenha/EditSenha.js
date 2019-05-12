import React, { Component } from 'react';
import axios from '../../../axios-order';
import { connect } from 'react-redux';

import classes from './EditSenha.css';

class EditSenha extends Component {

    state = {
        cadastro: {
            password: '',
            password2: ''
        },
        error: null
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
        axios.post(`api/users/editpass/${this.props.userId}`, this.state.cadastro, { headers: {"Authorization" : this.props.token} })
            .then(res => {
                this.props.history.goBack();
            })
            .catch(error => {
                this.setState({error: error.response});
            })
    }

    render () {
        return (
            <div>
                <div className={classes.login}>
                    <div className={classes.titulo}><h1>Mudar sua senha</h1></div>
                    <form>
                        <div>
                            <label>Nova senha</label>
                            <input onChange={this.setChangeValue} value={this.state.cadastro.password} name="password" type="password" placeholder="senha" />
                            <span>{this.state.error ? this.state.error.data.password : null}</span>
                        </div>
                        <div>
                            <label>Repita a Senha</label>
                            <input onChange={this.setChangeValue} value={this.state.cadastro.password2} name="password2" type="password" placeholder="senha" />
                            <span>{this.state.error ? this.state.error.data.password2 : null}</span>
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
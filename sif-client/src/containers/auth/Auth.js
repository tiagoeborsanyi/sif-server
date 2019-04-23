import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './Auth.css';
import * as actions from '../../store/actions/index';

class Auth extends Component {

    submitHandler = () => {
        // event.preventDefault();
        this.props.onAuth('teste', '123');
    }

    render () {
        return (
            <div>
                <div className={classes.login}>
                    <div className={classes.titulo}><h1>Cadastra Usuario</h1></div>
                    <form>
                        <div>
                            <label>E-mail</label>
                            <input type="text" placeholder="e-mail" />
                        </div>
                        <div>
                            <label>Senha</label>
                            <input type="password" placeholder="senha" />
                        </div>
                        <button onClick={this.submitHandler}>Cadastrar</button>
                    </form>
                    <button onClick={this.submitHandler}>test</button>
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

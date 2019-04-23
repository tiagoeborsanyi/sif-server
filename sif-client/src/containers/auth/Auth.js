import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './Auth.css';
import * as actions from '../../store/actions/auth';

class Auth extends Component {
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
                        <button>Cadastrar</button>
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

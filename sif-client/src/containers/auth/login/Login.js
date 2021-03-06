import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../../../store/actions/index';

import classes from './Login.css';

class Login extends Component {
    state = {
        login: {
            email: '',
            pass: ''
        }
    }

    componentDidMount () {
        this.props.setErrorFinish();
        if (this.props.isAuth) {
            this.props.setLoginRedirect();
        }
    }

    setChangeLogin = (event) => {
        const updateLogin = {
            ...this.state.login
        }
        updateLogin[event.target.name] = event.target.value;
        this.setState({login: updateLogin});
    }

    submitLogin = (event) => {
        event.preventDefault();
        this.props.onLogin(this.state.login.email, this.state.login.pass);
    }

    render () {
        let loginRedirect = null;
        if (this.props.isAuth) {
            loginRedirect = <Redirect to={this.props.loginRedirectPath} />
        }
        return (
            <div className={classes.container}>
                {loginRedirect}
                <div className={classes.login}>
                    <div className={classes.titulo}><h1>Sif-Server</h1></div>
                    <form onSubmit={this.submitLogin}>
                        <div>
                            <label>E-mail</label>
                            <input 
                                onChange={this.setChangeLogin} 
                                value={this.state.login.email} 
                                name="email" 
                                type="email" 
                                placeholder="e-mail" />
                            <span>{this.props.error ? this.props.error.data.email : null}</span>
                        </div>
                        <div>
                            <label>Senha</label>
                            <input 
                                onChange={this.setChangeLogin} 
                                value={this.state.login.pass} 
                                name="pass" 
                                type="password" 
                                placeholder="senha" />
                            <span>{this.props.error ? this.props.error.data.password : null}</span>
                        </div>
                        <button>Entrar</button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuthenticate,
        loginRedirectPath: state.auth.loginRedirectPath,
        error: state.error.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogin: (email, pass) => dispatch(actions.login(email, pass)),
        onSetRedirect: () => dispatch(actions.setLoginRedirect('/')),
        setErrorFinish: () => dispatch(actions.setErrorFinish())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
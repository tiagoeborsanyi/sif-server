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
        console.log('DidMount Login')
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
                        </div>
                        <div>
                            <label>Senha</label>
                            <input 
                                onChange={this.setChangeLogin} 
                                value={this.state.login.pass} 
                                name="pass" 
                                type="password" 
                                placeholder="senha" />
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
        loginRedirectPath: state.auth.loginRedirectPath
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogin: (email, pass) => dispatch(actions.login(email, pass))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
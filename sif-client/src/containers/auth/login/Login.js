import React, { Component } from 'react';
import { connect } from 'react-redux';
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
        console.log('DidMount')
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
        return (
            <div className={classes.container}>
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

const mapDispatchToProps = dispatch => {
    return {
        onLogin: (email, pass) => dispatch(actions.login(email, pass))
    }
}

export default connect(null, mapDispatchToProps)(Login);
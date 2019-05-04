import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './Perfil.css';

class Perfil extends Component {
    render () {
        return (
            <div className={classes.container}>
                <p>nome: { this.props.nome }</p>
                <p>email: {this.props.email }</p>
                <button>Editar cadastro</button>
                <button>Alterar senha</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        nome: state.auth.nome,
        email: state.auth.email
    }
}

export default connect(mapStateToProps)(Perfil);
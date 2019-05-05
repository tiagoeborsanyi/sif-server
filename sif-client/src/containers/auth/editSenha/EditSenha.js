import React, { Component } from 'react';
import axios from '../../../axios-order';
import { connect } from 'react-redux';

import classes from './EditSenha.css';

class EditSenha extends Component {
    render () {
        console.log(this.props.userId);
        return (
            <div className={classes.container}>
                <h3>Editar a senha do Usuario</h3>
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
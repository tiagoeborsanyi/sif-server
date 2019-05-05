import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from '../../../axios-order';
import { Link } from 'react-router-dom';

import classes from './Perfil.css';

class Perfil extends Component {

    state = {
        update: null,
        name: null,
        email: null
    }

    componentDidMount () {
        if (this.state.update === null) {
            axios.get('/api/users/current', { headers: {"Authorization" : this.props.token} })
                .then(res => {
                    console.log(res.data);
                    this.setState({name: res.data.name, email: res.data.email});
                })
        }
        
    }

    render () {
        return (
            <div className={classes.container}>
                <p>nome: { this.state.name }</p>
                <p>email: {this.state.email }</p>
                <Link to="/edita-cadastro">Editar cadastro</Link>
                <Link to="/edita-senha">Alterar senha</Link>
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

export default connect(mapStateToProps)(Perfil);
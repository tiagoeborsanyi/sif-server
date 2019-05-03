import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSearchResult } from '../../../store/actions/busca';

import classes from './Toolbar.css';

class Toolbar extends Component {
    state = {
        valor: ''
    }

    componentDidMount () {
        console.log('DidMount navbar')
    }

    setSearchBar = (event) => {
        this.setState({valor: event.target.value});
        this.props.onSearchResult(event.target.value);
    }

    render () {
        let auth = this.props.isAuth;
        return (
            <div>
            { auth 
            ? 
            <header>
                <nav className={classes.navbar}>
                    <ul className={classes.nav__items}>
                        <li className={classes.logo}><NavLink to="/dashboard">Sif-Server</NavLink></li>
                        <li className={classes.search}><input onChange={this.setSearchBar} value={this.state.valor} type="text" placeholder="Search" /></li>
                        <li className={classes.links}><NavLink to="/cadastro-vt">ADD+</NavLink></li>
                        <li className={classes.links+' '+classes.list_1}>
                            <span className={classes.link__user}>Usuario</span>
                            <ul>
                                <li>
                                    <NavLink to="/perfil-user">Perfil</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/cadastro-user">Cadastrar</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/logout">Sair</NavLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </header> : null }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuthenticate
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearchResult: (value) => dispatch(fetchSearchResult(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
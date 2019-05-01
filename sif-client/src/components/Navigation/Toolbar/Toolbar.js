import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSearch } from '../../../store/actions/busca';

import classes from './Toolbar.css';

class Toolbar extends Component {
    state = {

    }

    componentDidMount() {
        const val = ['1', '2']
        this.props.onSearchValue(val);
    }

    render () {
        return (
            <div>
            <header>
                <nav className={classes.navbar}>
                    <ul className={classes.nav__items}>
                        <li className={classes.logo}><NavLink to="/">Sif-Server</NavLink></li>
                        <li className={classes.search}><input type="text" placeholder="Search" /></li>
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
            </header>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        filtro: state.filtro.search
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearchValue: (value) => dispatch(fetchSearch(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
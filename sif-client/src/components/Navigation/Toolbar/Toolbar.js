import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Toolbar.css';

const toolbar = (props) => (
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

export default toolbar;
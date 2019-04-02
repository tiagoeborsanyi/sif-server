import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Toolbar.css';

const toolbar = (props) => (
    <div>
    <header>
        <nav className={classes.navbar}>
            <ul>
                <li className={classes.logo}><NavLink to="/">Logo</NavLink></li>
                <li className={classes.links}><NavLink to="/cadastro-vt">ADD+</NavLink></li>
                <li className={classes.links}><NavLink to="/user">User</NavLink></li>
            </ul>
        </nav>
    </header>
    </div>
);

export default toolbar;
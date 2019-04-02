import React from 'react';

import classes from './Toolbar.css';

const toolbar = (props) => (
    <div>
    <header>
        <nav className={classes.navbar}>
            <ul>
                <li className={classes.logo}><a href="#">Logo</a></li>
                <li className={classes.links}><a href="#">ADD+</a></li>
                <li className={classes.links}><a href="#">User</a></li>
            </ul>
        </nav>
    </header>
    </div>
);

export default toolbar;
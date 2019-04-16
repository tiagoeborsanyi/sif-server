import React, { Component } from 'react';
import axios from '../../axios-order';

import classes from './Dashboard.css';

class Dashboard extends Component {
    render() {
        return (
            <div className={classes.container}>
                <h2>Dashboard</h2>
            </div>
        )
    }
}

export default Dashboard;
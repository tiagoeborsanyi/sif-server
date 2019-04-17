import React, { Component } from 'react';
import axios from '../../axios-order';

import classes from './Dashboard.css';
import Item from './Item/Item';

class Dashboard extends Component {

    state = {
        itens: []
    }

    componentDidMount () {
        axios.get('api/vt').then(res => {
            this.setState({itens: res.data});
        })
        .catch(err => console.log(err));
    }

    render() {
        console.log(this.state.itens);
        return (
            <div className={classes.container}>
                <Item />
            </div>
        )
    }
}

export default Dashboard;
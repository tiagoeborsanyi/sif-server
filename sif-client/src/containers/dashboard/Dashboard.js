import React, { Component } from 'react';
import axios from '../../axios-order';
import { connect } from 'react-redux';

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
        console.log(this.props.filtro);
        const itens = this.state.itens;
        let compItens = null
        if (itens) {
            compItens = itens.map((item, index) => (
                                <Item
                                    key={item._id}
                                    id={item._id}
                                    nomevt={item.nomevt} 
                                    apelido={item.apelido}
                                    migrada={item.vtmigrada}
                                    hd={item.hds} />
                            ))
        }
        return (
            <div className={classes.container}>
                {compItens}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        filtro: state.filtro.search
    }
}

export default connect(mapStateToProps)(Dashboard);
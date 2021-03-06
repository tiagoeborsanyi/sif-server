import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSearch } from '../../store/actions/busca';
// import * as action from '../../store/actions/index';

import classes from './Dashboard.css';
import Item from './Item/Item';

class Dashboard extends Component {

    componentDidMount () {
        this.props.onSearchValue(this.props.token);
    }

    render() {
        const itens = this.props.filtro;
        const searchResult = itens.filter(obj => {
            return obj.nomevt.toLowerCase().search(this.props.valor.toLowerCase()) >= 0;
        });
        let compItens = null
        if (searchResult) {
            compItens = searchResult.map((item, index) => (
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
        filtro: state.filtro.search,
        valor: state.filtro.valor,
        token: state.auth.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearchValue: (token) => dispatch(fetchSearch(token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
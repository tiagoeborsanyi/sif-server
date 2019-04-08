import React, { Component } from 'react';
import axios from '../../../axios-order';

import CadastroVt from '../../../components/CadastroVt/CadastroVt';

class Editarvt extends Component {

    state = {
        cadastro: {
            name: '',
            apelido: ''
        }
    }

    changedItem = (event) => {
        const updateObjItem = {
            ...this.state.cadastro
        }
        let updateObjElement = {
            ...updateObjItem[event.target.name]
        }
        updateObjElement = event.target.value;
        updateObjItem[event.target.name] = updateObjElement; 
        this.setState({cadastro: updateObjItem});
        console.log('event.target.value', updateObjItem);
    }

    render () {
        return (
            <CadastroVt
                name={this.state.cadastro.name}
                apelido={this.state.cadastro.apelido}
                changed={(event) => this.changedItem(event)} />
        );
    }
}

export default Editarvt;
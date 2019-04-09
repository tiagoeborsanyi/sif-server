import React, { Component } from 'react';
import axios from '../../../axios-order';

import CadastroVt from '../../../components/CadastroVt/CadastroVt';

class Editarvt extends Component {

    state = {
        cadastro: {
            name: {
                name: '',
                valid: false
            },
            apelido: {
                apelido: '',
                valid: false
            }
        }
    }

    changedItem = (event) => {
        const updateObjItem = {
            ...this.state.cadastro
        }
        let updateObjElement = {
            ...updateObjItem[event.target.name]
        }
        updateObjElement[event.target.name] = event.target.value;
        updateObjElement[event.target.name].trim() !==  '' ? updateObjElement['valid'] = true : updateObjElement['valid'] = false;
        updateObjItem[event.target.name] = updateObjElement;
        this.setState({cadastro: updateObjItem});
        console.log('event.target.value', updateObjItem);
    }

    cadastraVt = (event) => {
        event.preventDefault();
        console.log(this.state.cadastro);
    }

    render () {
        return (
            <CadastroVt
                name={this.state.cadastro.name}
                apelido={this.state.cadastro.apelido}
                changed={(event) => this.changedItem(event)}
                cadastravt={this.cadastraVt} />
        );
    }
}

export default Editarvt;
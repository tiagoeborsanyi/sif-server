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
            },
            vtmigrada: {
                vtmigrada: false
            },
            fitalocalidade: {
                fitalocalidade: false
            },
            disco600: {
                disco600: false
            },
            quatrodiscos: {
                quatrodiscos: false
            },
            chamadoassystretiradadiscos: {
                data: '',
                numerochamado: '',
                observacao: ''
            },
            hds: [
                {
                    baia: '1',
                    status: ''
                },
                {
                    baia: '2',
                    status: ''
                },
                {
                    baia: '3',
                    status: ''
                },
                {
                    baia: '4',
                    status: ''
                },
                {
                    baia: '5',
                    status: ''
                },
                {
                    baia: '6',
                    status: ''
                },
                {
                    baia: '7',
                    status: ''
                },
                {
                    baia: '8',
                    status: ''
                }
            ],
            disponivelretiradadisco: {
                disponivelretiradadisco: false
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
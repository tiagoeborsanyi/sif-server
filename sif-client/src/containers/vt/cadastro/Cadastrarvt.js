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
                vtmigrada: ''
            },
            fitalocalidade: {
                fitalocalidade: ''
            },
            disco600: {
                disco600: ''
            },
            quatrodiscos: {
                quatrodiscos: ''
            },
            chamadoassystretiradadiscos: {
                data: '',
                numerochamado: '',
                observacao: ''
            },
            hds: [
                {
                    baia1: ''
                },
                {
                    baia2: ''
                },
                {
                    baia3: ''
                },
                {
                    baia4: ''
                },
                {
                    baia5: ''
                },
                {
                    baia6: ''
                },
                {
                    baia7: ''
                },
                {
                    baia8: ''
                }
            ],
            disponivelretiradadisco: {
                disponivelretiradadisco: ''
            },
            observacaovt: {
                observacaovt: ''
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
        updateObjElement[event.target.id] = event.target.value;
        updateObjElement[event.target.id].trim() !==  '' ? updateObjElement['valid'] = true : updateObjElement['valid'] = false;
        updateObjItem[event.target.name] = updateObjElement;
        this.setState({cadastro: updateObjItem});
        //console.log('event.target.value', event.target, updateObjItem);
    }

    changedHd = (event) => {
        const updateObjItem = {
            ...this.state.cadastro
        }
        let updateObjElement = {
            ...updateObjItem[event.target.name]
        }
        // console.log(updateObjElement[+event.target.id.substring(4)-1]);
        updateObjElement[+event.target.id.substring(4)-1][event.target.id] = event.target.value;
        updateObjItem[event.target.name] = updateObjElement;
        this.setState({cadastro: updateObjItem});
        // console.log('event.target.value', event.target, updateObjItem);
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
                vtmigrada={this.state.cadastro.vtmigrada}
                fitalocalidade={this.state.cadastro.fitalocalidade}
                disco600={this.state.cadastro.disco600}
                quatrodiscos={this.state.cadastro.quatrodiscos}
                chamadoassystretiradadiscos={this.state.cadastro.chamadoassystretiradadiscos}
                hds={this.state.cadastro.hds}
                disponivelretiradadisco={this.state.cadastro.disponivelretiradadisco}
                observacaovt={this.state.cadastro.observacaovt}
                changed={(event) => this.changedItem(event)}
                changedhd={(event) => this.changedHd(event)} 
                cadastravt={this.cadastraVt} />
        );
    }
}

export default Editarvt;
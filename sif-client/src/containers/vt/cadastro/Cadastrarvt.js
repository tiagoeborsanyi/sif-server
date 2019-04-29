import React, { Component } from 'react';
import axios from '../../../axios-order';

import CadastroVt from '../../../components/CadastroVt/CadastroVt';

class Editarvt extends Component {

    state = {
        cadastro: {
            nomevt: {
                nomevt: '',
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
        },
        update: true
    }

    componentDidMount() {
        if (this.state.update) {
            const id = this.props.location.hash.slice(1);
            axios.get(`/api/vt/${id}`)
                .then(res => {
                    let updateCadastro =  {
                        _id: {
                            id: res.data._id
                        },
                        nomevt: {
                            nomevt: res.data.nomevt
                        },
                        apelido: {
                            apelido: res.data.apelido
                        },
                        vtmigrada: {
                            vtmigrada: res.data.vtmigrada
                        },
                        fitalocalidade: {
                            fitalocalidade: res.data.fitalocalidade
                        },
                        disco600: {
                            disco600: res.data.disco600
                        },
                        quatrodiscos: {
                            quatrodiscos: res.data.quatrodiscos
                        },
                        chamadoassystretiradadiscos: {
                            data: res.data.chamadoassystretiradadiscos.data,
                            numerochamado: res.data.chamadoassystretiradadiscos.numerochamado,
                            observacao: res.data.chamadoassystretiradadiscos.observacao
                        },
                        hds: [
                            {
                                baia1: res.data.hds.baia1
                            },
                            {
                                baia2: res.data.hds.baia2
                            },
                            {
                                baia3: res.data.hds.baia3
                            },
                            {
                                baia4: res.data.hds.baia4
                            },
                            {
                                baia5: res.data.hds.baia5
                            },
                            {
                                baia6: res.data.hds.baia6
                            },
                            {
                                baia7: res.data.hds.baia7
                            },
                            {
                                baia8: res.data.hds.baia8
                            }
                        ],
                        disponivelretiradadisco: {
                            disponivelretiradadisco: res.data.disponivelretiradadisco
                        },
                        observacaovt: {
                            observacaovt: res.data.observacaovt
                        }
                    }
                    this.setState({cadastro: updateCadastro, update: false});
                    console.log(res.data);
                })
                .catch(err => console.log(err));
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
        axios.post('api/vt', this.state.cadastro)
            .then(res => {
                console.log(res);
                this.props.history.push('/');
            })
            .catch(error => {
                console.log(error.response.data);
            })
    }

    render () {
        return (
            <CadastroVt
                nomevt={this.state.cadastro.nomevt}
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
import React, { Component } from 'react';
import axios from '../../../axios-order';

import classes from './VisualizaVt.css';

class Viewvt extends Component {

    state = {
        vt: {},
        statushd: null,
        update: true
    }

    componentDidMount () {
        if (this.state.update) {
            const id = this.props.location.hash.slice(1);
            axios.get(`/api/vt/${id}`)
                .then(res => {
                    this.setState({vt: res.data, update: false});
                    console.log(res.data);
                })
                .catch(err => console.log(err));
        }
    }

    deleteVt = (id) => {

    }

    setHds = (status, index) => {
        switch (status) {
            case 'OK':
                return (
                    <div key={index}>
                        <li>{index}
                            <ul className={classes.OK}>
                                <li><div></div></li>
                            </ul>
                        </li>
                    </div>
                );
             case 'SMART':
                return (
                    <div key={index}>
                        <li>{index}
                            <ul className={classes.SMART}>
                                <li><div></div></li>
                            </ul>
                        </li>
                    </div>
                );
            case 'FAULT':
                return (
                    <div key={index}>
                        <li>{index}
                            <ul className={classes.FAULT}>
                                <li><div></div></li>
                            </ul>
                        </li>
                    </div>
                );
            case 'NOT':
                return (
                    <div key={index}>
                        <li>{index}
                            <ul className={classes.NOT}>
                                <li><div></div></li>
                            </ul>
                        </li>
                    </div>
                );
            default: return (<div></div>);
        }
    }

    render () {
        let newHd = null
        if (this.state.vt.hds) {
            newHd = Object.entries(this.state.vt.hds).map((hd, index) => (
                this.setHds(hd[1], index)
            ));
            // console.log(this.state.vt.hds)
        }
        return (
            <div className={classes.container}>
            <div className={classes.container_titulo}>
                <h2>{this.state.vt.nomevt} - {this.state.vt.apelido}</h2>
                <h3>VT MIGRADA: {this.state.vt.vtmigrada}</h3>
            </div>
            <div className={classes.container_hd}>
                <hr />
                <div className={classes.container_hd__descricao_situacao}>HD's situação: <div className={classes.container_hd__situação}></div></div>
                <div className={classes.container_hd__historico_troca}>
                    <h2>Status dos HD's</h2>
                    <div className={classes.hd_status__content}>
                        <ul className={classes.container_hd__unidades}>
                            {newHd}
                        </ul>
                    </div>
                    
                    <br />
                    <br />
                    <h2>Historico de troca de HD's</h2>
                    <table>
                        <thead>
                            <tr>
                            <th scope="col">Data</th>
                            <th scope="col">Numero da baia</th>
                            <th scope="col">Situação</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td data-label="Account">15/03/2019</td>
                            <td data-label="Due Date">5</td>
                            <td data-label="Amount">SMART</td>
                            </tr>
                            <tr>
                            <td data-label="Account">22/03/2019</td>
                            <td data-label="Due Date">3</td>
                            <td data-label="Amount">FAULT</td>
                            </tr>
                            <tr>
                            <td data-label="Account">23/04/2019</td>
                            <td data-label="Due Date">6</td>
                            <td data-label="Amount">FAULT</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <br />
                <br />
                <hr />
                <div className={classes.container_unidfita__descricao_situacao}>Unidade de fita situação: <div className={classes.container_unidfita__situação}></div></div>
                <div className={classes.container_hunidfita__historico_troca}>
                    <h2>Historico de troca de Unidades de Fitas</h2>
                    <table>
                        <thead>
                            <tr>
                            <th scope="col">Data</th>
                            <th scope="col">Observação</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td data-label="Account">15/03/2019</td>
                            <td data-label="Due Date">Unidade foi trocada</td>
                            </tr>
                            <tr>
                            <td data-label="Account">22/03/2019</td>
                            <td data-label="Due Date">foi colocada a unidade de batatais</td>
                            </tr>
                            <tr>
                            <td data-label="Account">23/04/2019</td>
                            <td data-label="Due Date">referente ao chamado r3454</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        );
    }
}

export default Viewvt;
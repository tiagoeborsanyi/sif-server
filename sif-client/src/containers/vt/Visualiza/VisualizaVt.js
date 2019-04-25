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
        let newHd = null;
        let histHd = [];
        let tableHd = null;
        let histFita = [];
        let tableFita = null;
        if (this.state.vt.hds) {
            newHd = Object.entries(this.state.vt.hds).map((hd, index) => (
                this.setHds(hd[1], index)
            ));
            // console.log(this.state.vt.hds)
        }
        if (this.state.vt.historicosituacaohd) {
            const arrHd = this.state.vt.historicosituacaohd;
            histHd = arrHd.map((objHd, index) => (
                        <tbody key={index}>
                            <tr>
                            <td>{objHd.date}</td>
                            <td>{objHd.baia}</td>
                            <td>{objHd.observacao}</td>
                            </tr>
                        </tbody>
            ));
            if (histHd.length > 0) {
                tableHd  = (
                    <div>
                        <h2>Historico de troca de HD's</h2>
                        <table>
                            <thead>
                                <tr>
                                <th scope="col">Data</th>
                                <th scope="col">Numero da baia</th>
                                <th scope="col">Observação</th>
                                </tr>
                            </thead>
                            {histHd}
                        </table>
                    </div>
                );
            }
        }
        if (this.state.vt.historicotrocafita) {
            const arrFita = this.state.vt.historicotrocafita;
            histFita = arrFita.map((objFita, index) => (
                <tbody key={index}>
                    <tr>
                    <td>{objFita.date}</td>
                    <td>{objFita.observacao}</td>
                    </tr>
                </tbody>
            ));
            if (histFita.length > 0) {
                tableFita = (
                <div>
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
                        {histFita}
                    </table>
                </div>
                </div>
                );
            }
        }
        return (
            <div className={classes.container}>
            <div className={classes.content__botao}>
                <button>Hd's</button>
                <button>Unid. Fita</button>
                <button>Editar</button>
                <button>Excluir</button>
            </div>
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
                    {tableHd}
                </div>

                <br />
                <br />
                {tableFita}
            </div>
            <div>
                <h3>Observação VT</h3>
                <p>{this.state.vt.observacaovt}</p>
            </div>
        </div>
        );
    }
}

export default Viewvt;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../../axios-order';
import { connect } from 'react-redux';

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
            axios.get(`/api/vt/${id}`, { headers: {"Authorization" : this.props.token} })
                .then(res => {
                    this.setState({vt: res.data, update: false});
                })
                .catch(err => console.log(err));
        }
    }

    deleteVt = () => {
        const id = this.props.location.hash.slice(1);
        axios.delete(`/api/vt/${id}`, { headers: {"Authorization" : this.props.token} })
            .then(res => {
                this.props.history.push('/');
            })
            .catch(err => console.log(err));
    }

    setHds = (status, index) => {
        switch (status) {
            case 'OK':
                return (
                    <div key={index}>
                        <li>{index+1}
                            <ul className={classes.OK}>
                                <li><div></div></li>
                            </ul>
                        </li>
                    </div>
                );
             case 'SMART':
                return (
                    <div key={index}>
                        <li>{index+1}
                            <ul className={classes.SMART}>
                                <li><div></div></li>
                            </ul>
                        </li>
                    </div>
                );
            case 'FAULT':
                return (
                    <div key={index}>
                        <li>{index+1}
                            <ul className={classes.FAULT}>
                                <li><div></div></li>
                            </ul>
                        </li>
                    </div>
                );
            case 'NOT':
                return (
                    <div key={index}>
                        <li>{index+1}
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
        let chamadoRetiradaHds = null;
        console.log(this.state.vt);
        if (this.state.vt.hds) {
            newHd = Object.entries(this.state.vt.hds).map((hd, index) => (
                this.setHds(hd[1], index)
            ));
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

        if (this.state.vt.chamadoassystretiradadiscos) {
            if (this.state.vt.chamadoassystretiradadiscos.numerochamado.length > 0) {
                console.log('retirada de discos');
                chamadoRetiradaHds = (
                    <div>
                        <p>Data: {this.state.vt.chamadoassystretiradadiscos.data}</p>
                        <p>Numero do chamado: {this.state.vt.chamadoassystretiradadiscos.numerochamado}</p>
                        <p>Observação: {this.state.vt.chamadoassystretiradadiscos.observacao}</p>
                    </div>
                )
            } 
        }
        return (
            <div className={classes.container}>
            <div className={classes.content__botao}>
                <Link to={{
                    pathname: '/edita-hd',
                    hash: `#${this.state.vt._id}`}}>Hd's</Link>
                <Link to={{
                    pathname: '/edita-fita',
                    hash: `#${this.state.vt._id}`}}>Unid. Fita</Link>
                <Link to={{
                    pathname: '/cadastro-vt',
                    hash: `#${this.state.vt._id}`}}>Editar</Link>
                <button onClick={this.deleteVt}>Excluir</button>
            </div>
            <div className={classes.container_titulo}>
                <h3>{this.state.vt.nomevt} - {this.state.vt.apelido}</h3>
                <h4><span>VT MIGRADA:</span> {this.state.vt.vtmigrada}</h4>
            </div>
            <div className={classes.container_hd}>
                <div className={classes.status__geral}>
                    <div className={classes.container_hd__descricao_situacao}><span>Disco de 600 Gb:</span>{this.state.vt.disco600}</div>
                    <div className={classes.container_hd__descricao_situacao}><span>Disponível para retirada de Discos:</span>  {this.state.vt.disponivelretiradadisco}</div>
                    <div className={classes.container_hd__descricao_situacao}><span>Unidade de Fita esta na localidade:</span>  {this.state.vt.fitalocalidade}</div>
                    <div className={classes.container_hd__descricao_situacao}><span>Foi recolhido os 4 discos:</span>  {this.state.vt.quatrodiscos}</div>
                </div>
                <hr />
                <div className={classes.container_hd__historico_troca}>
                    <h3>Status dos HD's</h3>
                    <div className={classes.hd_status__content}>
                        <ul className={classes.container_hd__unidades}>
                            {newHd}
                        </ul>
                    </div>

                    <br />
                    <div className={classes.container_hd__historico_troca}>
                        {chamadoRetiradaHds}
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

const mapStateToProps = state => {
    return {
        token: state.auth.token
    }
}

export default connect(mapStateToProps)(Viewvt);
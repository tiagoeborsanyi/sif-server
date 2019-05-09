import React, { Component } from 'react';
import axios from '../../../../axios-order';
import { connect } from 'react-redux';

import classes from './EditFita.css';

class EditFita extends Component {

    state = {
        fita: {
            data: '',
            observacao: ''
        },
        error: null
    }

    voltar = () => {
        this.props.history.goBack();
    }

    setChangeFita = (event) => {
        const objFita = {
            ...this.state.fita
        }
        objFita[event.target.name] = event.target.value;
        this.setState({fita: objFita});
    }

    cadastraHistFita = (event) => {
        event.preventDefault();
        const id = this.props.location.hash.slice(1);
        axios.post(`api/vt/fita/${id}`, this.state.fita, { headers: {"Authorization" : this.props.token} })
            .then(res => {
                this.props.history.goBack();
            })
            .catch(error => {
                console.log(error.response.data);
                this.setState({error: error.response});
            })
    }

    render () {
        return (
            <div>
                <div className={classes.fita}>
                    <div className={classes.titulo}><h1>Histórico Unidade de fita</h1></div>
                    <form>
                        <div>
                            <label>Data</label>
                            <input 
                                type="date" 
                                placeholder="Data da troca"
                                name="data"
                                value={this.state.fita.data}
                                onChange={(event) => this.setChangeFita(event)} />
                            <span>{this.state.error ? this.state.error.data.data : null}</span>
                        </div>
                        <div>
                            <label>Observação</label>
                            <textarea
                                name="observacao"
                                value={this.state.fita.observacao}
                                onChange={event => this.setChangeFita(event)}></textarea>
                        <span>{this.state.error ? this.state.error.data.observacao : null}</span>
                        </div>
                        <button onClick={this.cadastraHistFita}>Cadastrar</button>
                    </form>
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

export default connect(mapStateToProps)(EditFita);
import React, { Component } from 'react';
import axios from '../../../../axios-order';

import classes from './EditFita.css';

class EditFita extends Component {

    state = {
        fita: {
            data: '',
            observacao: ''
        }
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
        // console.log(objFita);
    }

    cadastraHistFita = (event) => {
        event.preventDefault();
        // console.log(this.state.fita);
        const id = this.props.location.hash.slice(1);
        axios.post(`api/vt/fita/${id}`, this.state.fita)
            .then(res => {
                // console.log(res);
                this.props.history.goBack();
            })
            .catch(error => {
                console.log(error.response.data);
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
                        </div>
                        <div>
                            <label>Observação</label>
                            <textarea
                                name="observacao"
                                value={this.state.fita.observacao}
                                onChange={event => this.setChangeFita(event)}></textarea>
                        </div>
                        <button onClick={this.cadastraHistFita}>Cadastrar</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default EditFita;
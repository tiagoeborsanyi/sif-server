import React, { Component } from 'react';
import axios from '../../../../axios-order';
import { connect } from 'react-redux';

import classes from './EditHd.css';

class EditHd extends Component {
    state = {
        hd: {
            data: '',
            baia: '',
            observacao: ''
        },
        error: null
    }

    setChangeHd = (event) => {
        const objHd = {
            ...this.state.hd
        }
        objHd[event.target.name] = event.target.value;
        this.setState({hd: objHd});
    }

    cadastraHistHd = (event) => {
        event.preventDefault();
        const id = this.props.location.hash.slice(1);
        axios.post(`api/vt/hd/${id}`, this.state.hd, { headers: {"Authorization" : this.props.token} })
            .then(res => {
                this.props.history.goBack();
            })
            .catch(error => {
                this.setState({error: error.response});
            });
    }

    render () {
        return (
            <div>
                <div className={classes.hd}>
                    <div className={classes.titulo}><h1>Histórico de troca de HD's</h1></div>
                    <form>
                        <div>
                            <label>Data</label>
                            <input 
                                type="date" 
                                placeholder="Data da troca"
                                name="data"
                                value={this.state.hd.data}
                                onChange={event => this.setChangeHd(event)} />
                            <span>{this.state.error ? this.state.error.data.data : null}</span>
                        </div>
                        <div>
                        <label>Baia trocada</label>
                        <select
                            name="baia"
                            value={this.state.hd.baia}
                            onChange={event => this.setChangeHd(event)}>
                            <option value="1">Baia 1</option>
                            <option value="2">Baia 2</option>
                            <option value="3">Baia 3</option>
                            <option value="4">Baia 4</option>
                            <option value="5">Baia 5</option>
                            <option value="6">Baia 6</option>
                            <option value="7">Baia 7</option>
                            <option value="8">Baia 8</option>
                        </select>
                        <span>{this.state.error ? this.state.error.data.baia : null}</span>
                        </div>
                        <div>
                            <label>Observação</label>
                            <textarea
                                name="observacao"
                                value={this.state.hd.observacao}
                                onChange={event => this.setChangeHd(event)}></textarea>
                            <span>{this.state.error ? this.state.error.data.observacao : null}</span>
                        </div>
                        <button onClick={this.cadastraHistHd}>Cadastrar</button>
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

export default connect(mapStateToProps)(EditHd);
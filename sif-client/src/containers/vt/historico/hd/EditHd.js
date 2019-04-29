import React, { Component } from 'react';
import axios from '../../../../axios-order';

import classes from './EditHd.css';

class EditHd extends Component {
    state = {
        hd: {
            data: '',
            baia: '',
            observacao: ''
        }
    }

    setChangeHd = (event) => {
        const objHd = {
            ...this.state.hd
        }
        objHd[event.target.name] = event.target.value;
        this.setState({hd: objHd});
        console.log(objHd);
    }

    cadastraHistHd = (event) => {
        event.preventDefault();
        // console.log(this.state.fita);
        const id = this.props.location.hash.slice(1);
        axios.post(`api/vt/hd/${id}`, this.state.hd)
            .then(res => {
                // console.log(res);
                this.props.history.goBack();
            })
            .catch(error => {
                console.log(error.response.data);
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
                        </div>
                        <div>
                            <label>Observação</label>
                            <textarea
                                name="observacao"
                                value={this.state.hd.observacao}
                                onChange={event => this.setChangeHd(event)}></textarea>
                        </div>
                        <button onClick={this.cadastraHistHd}>Cadastrar</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default EditHd;
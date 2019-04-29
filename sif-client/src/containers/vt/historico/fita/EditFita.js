import React, { Component } from 'react';

import classes from './EditFita.css';

class EditFita extends Component {

    voltar = () => {
        this.props.history.goBack();
    }

    render () {
        console.log(this.props);
        return (
            <div>
                <div className={classes.fita}>
                    <div className={classes.titulo}><h1>Histórico Unidade de fita</h1></div>
                    <form>
                        <div>
                            <label>Data</label>
                            <input type="date" placeholder="Data da troca" />
                        </div>
                        <div>
                            <label>Observação</label>
                            <textarea></textarea>
                        </div>
                        <button onClick={this.submitHandler}>Cadastrar</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default EditFita;
import React, { Component } from 'react';

import classes from './EditHd.css';

class EditHd extends Component {
    render () {
        return (
            <div>
                <div className={classes.hd}>
                    <div className={classes.titulo}><h1>Histórico de troca de HD's</h1></div>
                    <form>
                        <div>
                            <label>Data</label>
                            <input type="date" placeholder="Data da troca" />
                        </div>
                        <div>
                        <label>Baia trocada</label>
                        <select>
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
                            <textarea></textarea>
                        </div>
                        <button onClick={this.submitHandler}>Cadastrar</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default EditHd;
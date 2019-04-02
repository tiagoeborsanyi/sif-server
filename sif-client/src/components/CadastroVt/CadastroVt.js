import React from 'react';

import classes from './CadastroVt.css';

const cadastrovt = (props) => (
    <div className={classes.container}>
        <h2 className={classes.titleVt}>Cadastro de VT</h2>
        <form>
            <div className={classes.item}>
                <label>Nome VT</label>
                <input type="text" />
            </div>
            <div>
                <label>VT Migrada?</label>
                <select id="migrada">
                    <option>Selecione</option>
                    <option>SIM</option>
                    <option>NÃO</option>
                </select>
            </div>
            <div className={classes.item__hd}>
                <h3>HD's</h3>
                <div className={classes.item__list}>
                    <ul className={classes.item__listUl}>
                        <li>1
                            <ul className={classes.item__listSubUl}>
                                <li>
                                    <select id="migrada">
                                        <option>Selecione</option>
                                        <option>OK</option>
                                        <option>SMART</option>
                                        <option>FAULT</option>
                                        <option>NOT</option>
                                    </select>
                                </li>
                            </ul>
                        </li>
                        <li>2
                            <ul className={classes.item__listSubUl}>
                                <li>
                                    <select id="migrada">
                                        <option>Selecione</option>
                                        <option>OK</option>
                                        <option>SMART</option>
                                        <option>FAULT</option>
                                        <option>NOT</option>
                                    </select>
                                </li>
                            </ul>
                        </li>
                        <li>3
                            <ul className={classes.item__listSubUl}>
                                <li>
                                    <select id="migrada">
                                        <option>Selecione</option>
                                        <option>OK</option>
                                        <option>SMART</option>
                                        <option>FAULT</option>
                                        <option>NOT</option>
                                    </select>
                                </li>
                            </ul>
                        </li>
                        <li>4
                            <ul className={classes.item__listSubUl}>
                                <li>
                                    <select id="migrada">
                                        <option>Selecione</option>
                                        <option>OK</option>
                                        <option>SMART</option>
                                        <option>FAULT</option>
                                        <option>NOT</option>
                                    </select>
                                </li>
                            </ul>
                        </li>
                        <li>5
                            <ul className={classes.item__listSubUl}>
                                <li>
                                    <select id="migrada">
                                        <option>Selecione</option>
                                        <option>OK</option>
                                        <option>SMART</option>
                                        <option>FAULT</option>
                                        <option>NOT</option>
                                    </select>
                                </li>
                            </ul>
                        </li>
                        <li>6
                            <ul className={classes.item__listSubUl}>
                                <li>
                                    <select id="migrada">
                                        <option>Selecione</option>
                                        <option>OK</option>
                                        <option>SMART</option>
                                        <option>FAULT</option>
                                        <option>NOT</option>
                                    </select>
                                </li>
                            </ul>
                        </li>
                        <li>7
                            <ul className={classes.item__listSubUl}>
                                <li>
                                    <select id="migrada">
                                        <option>Selecione</option>
                                        <option>OK</option>
                                        <option>SMART</option>
                                        <option>FAULT</option>
                                        <option>NOT</option>
                                    </select>
                                </li>
                            </ul>
                        </li>
                        <li>8
                            <ul className={classes.item__listSubUl}>
                                <li>
                                    <select id="migrada">
                                        <option>Selecione</option>
                                        <option>OK</option>
                                        <option>SMART</option>
                                        <option>FAULT</option>
                                        <option>NOT</option>
                                    </select>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={classes.item}>
                <h3>Historico de situação HD's</h3>
                <div className={classes.item__hitoricoHd + ' '+ classes.item__hitoricoHdDate}>
                    <label>Data</label>
                    <input type="date" />
                </div>
                <div className={classes.item__hitoricoHd + ' '+ classes.item__hitoricoHdNumber}>
                    <label>Numero Baia</label>
                    <input type="number" />
                </div>
                <div className={classes.item__hitoricoHd + ' '+ classes.item__hitoricoHdSituacao}>
                    <label>Situação</label>
                    <input type="text" />
                </div>
            </div>

            

            <div>
                <label>Situação Unidade de Fita Backup</label>
                <select id="fitabackup">
                    <option>Selecione</option>
                    <option>OK</option>
                    <option>QUEBRADA</option>
                    <option>AGUARDANDO</option>
                    <option>TRANSITO</option>
                </select>
            </div>
            <div className={classes.item}>
                <h3>Historico de situação Unidade de Fitas</h3>
                <div>
                    <label>Data</label>
                    <input type="date" />
                </div>
                <div>
                    <label>Observação</label>
                    <input type="text" />
                </div>
            </div>
            <button className={classes.button__edit}>Cadastrar</button>
        </form>
    </div>
);

export default cadastrovt;
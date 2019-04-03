import React from 'react';

import classes from './CadastroVt.css';

const cadastrovt = (props) => (
    <div className={classes.container}>
        <h2 className={classes.titleVt}>Cadastro de VT</h2>
        <form>
            <div className={classes.item}>
                <label>Nome VT</label>
                <input type="text" />
                <label>Apelido VT</label>
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
            <div className={classes.discos}>
                <label className={classes.discos__600}>Disco de 600 baia 8?</label>
                <select id="disco600">
                    <option>Selecione</option>
                    <option>SIM</option>
                    <option>NÃO</option>
                </select>
                <label className={classes.discos__4}>Recolhido os 4 discos?</label>
                <select id="4discos">
                    <option>Selecione</option>
                    <option>SIM</option>
                    <option>NÃO</option>
                </select>
            </div>
            <div className={classes.item}>
                <h3>Chamado do Assyst de retirada dos discos</h3>
                <div className={classes.item__hitoricoHd + ' '+ classes.item__hitoricoHdDate}>
                    <label>Data</label>
                    <input type="date" />
                </div>
                <div className={classes.item__hitoricoHd + ' '+ classes.item__hitoricoHdNumber}>
                    <label>Número Chamado</label>
                    <input type="text" />
                </div>
                <div className={classes.item__hitoricoHd + ' '+ classes.item__hitoricoHdSituacao}>
                    <label>Observação</label>
                    <input type="text" />
                </div>
            </div>

            <br />
            <br />
            <br />

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
                <h3>Disponível para retirada dos discos</h3>
                <div className={classes.item__hitoricoHd + ' '+ classes.item__hitoricoHdNumber}>
                    <select id="retirada__discos">
                        <option>Selecione</option>
                        <option>SIM</option>
                        <option>NÃO</option>
                    </select>   
                </div>
                <h3>Histórico de situação HD's</h3>
                <div className={classes.item__hitoricoHd + ' '+ classes.item__hitoricoHdDate}>
                    <label>Data</label>
                    <input type="date" />
                </div>
                <div className={classes.item__hitoricoHd + ' '+ classes.item__hitoricoHdNumber}>
                    <label>Número Baia</label>
                    <input type="number" />
                </div>
                <div className={classes.item__hitoricoHd + ' '+ classes.item__hitoricoHdSituacao}>
                    <label>Situação</label>
                    <input type="text" />
                </div>
            </div>

            <br />
            <br />
            <br />

            
            <div className={classes.item}>
                <h3 className={classes.title__unidadefita}>Unidade de Fita</h3>
                <h3>Histórico de situação unidade de fita</h3>
                <div>
                    <label>Situação unidade de fita</label>
                    <select id="fitabackup">
                        <option>Selecione</option>
                        <option>OK</option>
                        <option>QUEBRADA</option>
                        <option>AGUARDANDO</option>
                        <option>TRANSITO</option>
                    </select>
                </div>

                <br />

                <div className={classes.item}>
                    <div className={classes.item__hitoricoHd + ' '+ classes.item__hitoricoHdDate}>
                        <label>Data da migração</label>
                        <input type="date" />
                    </div>
                    <div className={classes.item__hitoricoHd + ' '+ classes.item__hitoricoHdDate}>
                        <label>Data de disponibilidade</label>
                        <input type="date" />
                    </div>
                    <div className={classes.item__hitoricoHd + ' '+ classes.item__hitoricoHdNumber}>
                        <label>Unidade de fita retirada?</label>
                        <select id="unidade__retirada">
                            <option>Selecione</option>
                            <option>SIM</option>
                            <option>NÃO</option>
                        </select>
                    </div>
                </div>
                <br />
                <h3>Histórico de troca de unidade de fita</h3>
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
import React, { Component } from 'react';

import classes from './CadastroVt.css';
import Select from  './UI/Select';


class Cadastrovt extends Component {
    state = {

    }

    render () {
        console.log(this.props.apelido.valid)
        return (
            <div className={classes.container}>
                <h2 className={classes.titleVt}>Cadastro de VT</h2>
                <form onSubmit={this.props.cadastravt}>
                    <div className={classes.item}>
                        <label>Nome VT</label>
                        <input className={(this.props.name.valid ? classes.valid : classes.invalid)} type="text" name="name" value={this.props.name.name} onChange={this.props.changed} />
                        <label>Apelido VT</label>
                        <input className={(this.props.apelido.valid ? classes.valid : classes.invalid)} type="text" name="apelido" value={this.props.apelido.apelido} onChange={this.props.changed} />
                    </div>
                    <div>
                        <label className={classes.discos__600}>VT Migrada?</label>
                        <Select id="migrada" options={['SIM', 'NÃO']} />
                    </div>
                    <div className={classes.discos}>
                        <label className={classes.discos__600}>Disco de 600 baia 8?</label>
                        <Select id="disco600" options={['SIM', 'NÃO']} />
                        <label className={classes.discos__4}>Recolhido os 4 discos?</label>
                        <Select id="4discos" options={['SIM', 'NÃO']} />
                    </div>
                    <div className={classes.item}>
                        <h3>Chamado do Assyst de retirada dos discos</h3>
                        <div className={classes.item__hitoricoHd + ' '+ classes.item__hitoricoHdDate}>
                            <label>Data</label>
                            <input className={classes.valid} type="date" />
                        </div>
                        <div className={classes.item__hitoricoHd + ' '+ classes.item__hitoricoHdNumber}>
                            <label>Número Chamado</label>
                            <input className={classes.valid} type="text" />
                        </div>
                        <div className={classes.item__hitoricoHd + ' '+ classes.item__hitoricoHdSituacao}>
                            <label>Observação</label>
                            <input className={classes.valid} type="text" />
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
                                            <Select id="disco1" options={['OK', 'SMART', 'FAULT', 'NOT']} />
                                        </li>
                                    </ul>
                                </li>
                                <li>2
                                    <ul className={classes.item__listSubUl}>
                                        <li>
                                            <Select id="disco2" options={['OK', 'SMART', 'FAULT', 'NOT']} />
                                        </li>
                                    </ul>
                                </li>
                                <li>3
                                    <ul className={classes.item__listSubUl}>
                                        <li>
                                            <Select id="disco3" options={['OK', 'SMART', 'FAULT', 'NOT']} />
                                        </li>
                                    </ul>
                                </li>
                                <li>4
                                    <ul className={classes.item__listSubUl}>
                                        <li>
                                            <Select id="disco4" options={['OK', 'SMART', 'FAULT', 'NOT']} />
                                        </li>
                                    </ul>
                                </li>
                                <li>5
                                    <ul className={classes.item__listSubUl}>
                                        <li>
                                            <Select id="disco5" options={['OK', 'SMART', 'FAULT', 'NOT']} />
                                        </li>
                                    </ul>
                                </li>
                                <li>6
                                    <ul className={classes.item__listSubUl}>
                                        <li>
                                            <Select id="disco6" options={['OK', 'SMART', 'FAULT', 'NOT']} />
                                        </li>
                                    </ul>
                                </li>
                                <li>7
                                    <ul className={classes.item__listSubUl}>
                                        <li>
                                            <Select id="disco7" options={['OK', 'SMART', 'FAULT', 'NOT']} />
                                        </li>
                                    </ul>
                                </li>
                                <li>8
                                    <ul className={classes.item__listSubUl}>
                                        <li>
                                            <Select id="disco8" options={['OK', 'SMART', 'FAULT', 'NOT']} />
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={classes.item}>
                        <h3>Disponível para retirada dos discos</h3>
                        <div className={classes.item__hitoricoHd + ' '+ classes.item__hitoricoHdNumber}>
                            <Select id="retirada_discos" options={['SIM', 'NÃO']} />   
                        </div>
                        <h3>Histórico de situação HD's</h3>
                        <div className={classes.item__hitoricoHd + ' '+ classes.item__hitoricoHdDate}>
                            <label>Data</label>
                            <input className={classes.valid} type="date" />
                        </div>
                        <div className={classes.item__hitoricoHd + ' '+ classes.item__hitoricoHdNumber}>
                            <label>Número Baia</label>
                            <input className={classes.valid} type="number" />
                        </div>
                        <div className={classes.item__hitoricoHd + ' '+ classes.item__hitoricoHdSituacao}>
                            <label>Situação</label>
                            <input className={classes.valid} type="text" />
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
                            <Select id="retirada_discos" options={['OK', 'QUEBRADA', 'AGUARDANDO', 'TRANSITO']} />
                        </div>
        
                        <br />
        
                        <div className={classes.item}>
                            <div className={classes.item__hitoricoHd + ' '+ classes.item__hitoricoHdDate}>
                                <label>Data da migração</label>
                                <input className={classes.valid} type="date" />
                            </div>
                            <div className={classes.item__hitoricoHd + ' '+ classes.item__hitoricoHdDate}>
                                <label>Data de disponibilidade</label>
                                <input className={classes.valid} type="date" />
                            </div>
                            <div className={classes.item__hitoricoHd + ' '+ classes.item__hitoricoHdNumber}>
                                <label>Unidade de fita retirada?</label>
                                <Select id="unidade_retirada" options={['SIM', 'NÃO']} />
                            </div>
                        </div>
                        <br />
                        <h3>Histórico de troca de unidade de fita</h3>
                        <div>
                            <label>Data</label>
                            <input className={classes.valid} type="date" />
                        </div>
                        <div>
                            <label>Observação</label>
                            <input className={classes.valid} type="text" />
                        </div>
                    </div>
                    <button className={classes.button__edit}>Cadastrar</button>
                </form>
            </div>
        )
    }
}

export default Cadastrovt;
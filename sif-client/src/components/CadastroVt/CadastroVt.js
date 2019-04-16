import React, { Component } from 'react';

import classes from './CadastroVt.css';
import Select from  './UI/Select';


class Cadastrovt extends Component {
    state = {

    }

    render () {
        return (
            <div className={classes.container}>
                <h2 className={classes.titleVt}>Cadastro de VT</h2>
                <form onSubmit={this.props.cadastravt}>
                    <div className={classes.item}>
                        <label>Nome VT</label>
                        <input 
                            className={(this.props.name.valid ? classes.valid : classes.invalid)} 
                            type="text" 
                            name="name"
                            id="name"
                            value={this.props.name.name} 
                            onChange={this.props.changed} />
                        <label>Apelido VT</label>
                        <input 
                            className={(this.props.apelido.valid ? classes.valid : classes.invalid)} 
                            type="text" 
                            name="apelido"
                            id="apelido"
                            value={this.props.apelido.apelido} 
                            onChange={this.props.changed} />
                    </div>
                    <div>
                        <label className={classes.discos__600}>VT Migrada?</label>
                        <Select 
                            id="vtmigrada" 
                            options={['SIM', 'NÃO']}
                            name="vtmigrada"
                            value={this.props.vtmigrada.vtmigrada}
                            changed={this.props.changed} />
                        <label className={classes.discos__4}>Unidade de Fita no local?</label>
                        <Select 
                            id="fitalocalidade" 
                            options={['SIM', 'NÃO']}
                            name="fitalocalidade"
                            value={this.props.fitalocalidade.fitalocalidade}
                            changed={this.props.changed} />
                    </div>
                    <div className={classes.discos}>
                        <label className={classes.discos__600}>Disco de 600 baia 8?</label>
                        <Select 
                            id="disco600" 
                            options={['SIM', 'NÃO']}
                            name="disco600"
                            value={this.props.disco600.disco600}
                            changed={this.props.changed} />
                        <label className={classes.discos__4}>Recolhido os 4 discos?</label>
                        <Select 
                            id="quatrodiscos" 
                            options={['SIM', 'NÃO']}
                            name="quatrodiscos"
                            value={this.props.quatrodiscos.quatrodiscos}
                            changed={this.props.changed} />
                    </div>
                    <div className={classes.item}>
                        <h3>Chamado do Assyst de retirada dos discos</h3>
                        <div className={classes.item__hitoricoHd + ' '+ classes.item__hitoricoHdDate}>
                            <label>Data</label>
                            <input 
                                className={classes.valid} 
                                type="date"
                                name="chamadoassystretiradadiscos"
                                id="data"
                                value={this.props.chamadoassystretiradadiscos.data}
                                onChange={this.props.changed} />
                        </div>
                        <div className={classes.item__hitoricoHd + ' '+ classes.item__hitoricoHdNumber}>
                            <label>Número Chamado</label>
                            <input 
                                className={classes.valid} 
                                type="text"
                                name="chamadoassystretiradadiscos"
                                id="numerochamado"
                                value={this.props.chamadoassystretiradadiscos.numerochamado}
                                onChange={this.props.changed} />
                        </div>
                        <div className={classes.item__hitoricoHd + ' '+ classes.item__hitoricoHdSituacao}>
                            <label>Observação</label>
                            <input 
                                className={classes.valid} 
                                type="text"
                                name="chamadoassystretiradadiscos"
                                id="observacao"
                                value={this.props.chamadoassystretiradadiscos.observacao}
                                onChange={this.props.changed} />
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
                                            <Select 
                                                id="baia1" 
                                                options={['OK', 'SMART', 'FAULT', 'NOT']}
                                                name="hds"
                                                value={this.props.hds[0].baia1}
                                                changed={this.props.changedhd} />
                                        </li>
                                    </ul>
                                </li>
                                <li>2
                                    <ul className={classes.item__listSubUl}>
                                        <li>
                                            <Select 
                                                id="baia2" 
                                                options={['OK', 'SMART', 'FAULT', 'NOT']}
                                                name="hds"
                                                value={this.props.hds[1].baia2}
                                                changed={this.props.changedhd} />
                                        </li>
                                    </ul>
                                </li>
                                <li>3
                                    <ul className={classes.item__listSubUl}>
                                        <li>
                                            <Select 
                                                id="baia3" 
                                                options={['OK', 'SMART', 'FAULT', 'NOT']}
                                                name="hds"
                                                value={this.props.hds[2].baia3}
                                                changed={this.props.changedhd} />
                                        </li>
                                    </ul>
                                </li>
                                <li>4
                                    <ul className={classes.item__listSubUl}>
                                        <li>
                                            <Select 
                                                id="baia4" 
                                                options={['OK', 'SMART', 'FAULT', 'NOT']}
                                                name="hds"
                                                value={this.props.hds[3].baia4}
                                                changed={this.props.changedhd} />
                                        </li>
                                    </ul>
                                </li>
                                <li>5
                                    <ul className={classes.item__listSubUl}>
                                        <li>
                                            <Select 
                                                id="baia5" 
                                                options={['OK', 'SMART', 'FAULT', 'NOT']}
                                                name="hds"
                                                value={this.props.hds[4].baia5}
                                                changed={this.props.changedhd} />
                                        </li>
                                    </ul>
                                </li>
                                <li>6
                                    <ul className={classes.item__listSubUl}>
                                        <li>
                                            <Select 
                                                id="baia6" 
                                                options={['OK', 'SMART', 'FAULT', 'NOT']}
                                                name="hds"
                                                value={this.props.hds[5].baia6}
                                                changed={this.props.changedhd} />
                                        </li>
                                    </ul>
                                </li>
                                <li>7
                                    <ul className={classes.item__listSubUl}>
                                        <li>
                                            <Select 
                                                id="baia7" 
                                                options={['OK', 'SMART', 'FAULT', 'NOT']}
                                                name="hds"
                                                value={this.props.hds[6].baia7}
                                                changed={this.props.changedhd} />
                                        </li>
                                    </ul>
                                </li>
                                <li>8
                                    <ul className={classes.item__listSubUl}>
                                        <li>
                                            <Select 
                                                id="baia8" 
                                                options={['OK', 'SMART', 'FAULT', 'NOT']}
                                                name="hds"
                                                value={this.props.hds[7].baia8}
                                                changed={this.props.changedhd} />
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={classes.item}>
                        <h3>Disponível para retirada dos discos</h3>
                        <div className={classes.item__hitoricoHd + ' '+ classes.item__hitoricoHdNumber}>
                            <Select 
                                id="disponivelretiradadisco" 
                                name="disponivelretiradadisco" 
                                options={['SIM', 'NÃO']}
                                value={this.props.disponivelretiradadisco.disponivelretiradadisco}
                                changed={this.props.changed} />   
                        </div>
                        {/* aqui vai o codigo para historico de situação de HD's <HistoricoDiscos /> */}
                    </div>

                    <br />
                    <br />

                    <div className={classes.item}>
                        <h3>Observação VT</h3>
                        <textarea 
                            className={classes.valid}
                            name="observacaovt"
                            id="observacaovt"
                            rows="15"
                            cols="30"
                            value={this.props.observacaovt.observacaovt} 
                            onChange={this.props.changed} />
                    </div>
        
                    <br />

                    <button className={classes.button__edit}>Cadastrar</button>
                </form>
            </div>
        )
    }
}

export default Cadastrovt;
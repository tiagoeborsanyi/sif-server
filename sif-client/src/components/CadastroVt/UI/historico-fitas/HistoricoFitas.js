import React, { Component } from 'react';
import axios from '../../../axios-order';

const historicoFitas = (props) => (
    <div className={classes.item}>
        <h3 className={classes.title__unidadefita}>Unidade de Fita</h3>
        <h3>Histórico de situação unidade de fita</h3>
        <div>
            <label>Situação unidade de fita</label>
            <Select id="situacao_fita" options={['OK', 'QUEBRADA', 'AGUARDANDO', 'TRANSITO']} />
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
);

export default historicoFitas;
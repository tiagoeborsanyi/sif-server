import React, { Component } from 'react';
import axios from '../../../axios-order';

const historicoDiscos = (props) => (
    <div className={classes.item}>
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
            <label>Observação</label>
            <input className={classes.valid} type="text" />
        </div>
    </div>
);

export default historicoDiscos;
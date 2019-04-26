import React, { Component } from 'react';

import classes from './EditFita.css';

class EditFita extends Component {

    voltar = () => {
        this.props.history.goBack();
    }

    render () {
        console.log(this.props);
        return (
            <div className={classes.container}>
                <h2>Edição de fitas</h2>
                <button onClick={this.voltar}>Voltar</button>
            </div>
        );
    }
}

export default EditFita;
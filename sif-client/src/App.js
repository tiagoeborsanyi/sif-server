import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Layout from './hoc/Layout/Layout';
import CadastroVt from './containers/vt/cadastro/Cadastrarvt';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/cadastro-vt" component={CadastroVt} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
